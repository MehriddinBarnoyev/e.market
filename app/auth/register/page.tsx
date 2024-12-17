"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { AtSign, Lock, User, Users, Send } from 'lucide-react';
import Link from "next/link";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const router = useRouter();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await register(firstName, lastName, email, password, verificationCode);
      router.push("/profile");
    } catch (err) {
      setTimeout(() => {
        setError(
          "Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз."
        );

        setTimeout(() => {
          setError("");
        }, 2000);
      }, 2000);
    }
  };

  const handleSendCode = async () => {
    try {
      // Here you would typically call an API to send the verification code
      // For this example, we'll just simulate it with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsCodeSent(true);
      // You might want to show a success message here
    } catch (err) {
      setError("Ошибка при отправке кода. Пожалуйста, попробуйте еще раз.");
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
            Создать аккаунт
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <User
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                required
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="relative mt-2">
              <Users
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                required
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="relative mt-2">
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
            <Button
              type="button"
              onClick={handleSendCode}
              className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center"
              disabled={isCodeSent}
            >
              <Send className="mr-2" size={16} />
              {isCodeSent ? "Код отправлен" : "Получить код"}
            </Button>
          </div>

          {isCodeSent && (
            <div className="relative mt-2">
              <Input
                type="text"
                required
                className="pl-10 bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Введите 6-значный код"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
              />
            </div>
          )}

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={!isCodeSent}
            >
              Зарегистрироваться
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Уже есть аккаунт?{" "}
            <Link
              href="/auth"
              className="font-medium text-indigo-400 hover:text-indigo-300"
            >
              Войти
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

