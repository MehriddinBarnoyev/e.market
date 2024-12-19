import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  password: string;
};

const API_URL = "https://676112646be7889dc35fa055.mockapi.io/users";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    verificationCode: string
  ) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role: 'user',
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const newUser: User = await response.json();
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);

      return newUser;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}?email=${email}`);
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const users: User[] = await response.json();
      const existingUser = users.find(user => user.email === email && user.password === password);

      if (!existingUser) {
        throw new Error("Login failed: Invalid credentials");
      }

      localStorage.setItem("user", JSON.stringify(existingUser));
      setUser(existingUser);

      return existingUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth");
  };

  return { user, register, login, logout };
}
