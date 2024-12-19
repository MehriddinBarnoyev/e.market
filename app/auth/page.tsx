"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { AtSign, Lock, Github, Twitter } from 'lucide-react';
import Link from "next/link";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const user = await login(email, password);
      if (user) {
        if (user.role === "admin") {
          router.push("/user-profile");
        } else {
          router.push("/profile");
        }
      } else {
        setError("Неверные учетные данные");
      }
    } catch (err) {
      setError("Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 p-10 bg-gray-800 rounded-xl shadow-2xl"
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Войти в аккаунт
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <AtSign
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="email"
                required
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Email адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mt-2">
              <Lock
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="password"
                required
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Запомнить меня
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-400 hover:text-indigo-300"
              >
                Забыли пароль?
              </a>
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Войти
            </Button>
          </div>
        </form>

        <div className="mt-4">
          <Link href="/auth/register">
            <Button
              type="button"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white"
            >
              Зарегистрироваться
            </Button>
          </Link>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">
                Или продолжить с
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>GitHub</span>
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600"
              >
                <Twitter className="w-5 h-5 mr-2" />
                <span>Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

