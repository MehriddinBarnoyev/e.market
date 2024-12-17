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

// Default 4 user va 2 admin
const DEFAULT_USERS: User[] = [
  // Oddiy foydalanuvchilar
  {
    id: "1",
    firstName: "Ali",
    lastName: "Valiyev",
    email: "ali.valiyev@example.com",
    role: "user",
    password: "123456",
  },
  {
    id: "2",
    firstName: "Murod",
    lastName: "Bekmurodov",
    email: "murod.bekmurodov@example.com",
    role: "user",
    password: "123456",
  },
  // Admin foydalanuvchilar
  {
    id: "3",
    firstName: "Mehriddin",
    lastName: "Barnoyev",
    email: "mehriddin.barnoyev@example.com",
    role: "admin",
    password: "123456",
  },
  {
    id: "4",
    firstName: "Dilnura",
    lastName: "Abdurashidova",
    email: "dilnura.abdurashidova@example.com",
    role: "admin",
    password: "123456",
  },
];

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // LocalStorage'da foydalanuvchi borligini tekshirish
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Foydalanuvchilarni dastlabki holatda saqlash
      localStorage.setItem("default_users", JSON.stringify(DEFAULT_USERS));
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
      // Yangi foydalanuvchini ro'yxatdan o'tkazish
      const newUser: User = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email,
        role: "user",
        password,
      };

      const users = JSON.parse(localStorage.getItem("default_users") || "[]");
      users.push(newUser);
      localStorage.setItem("default_users", JSON.stringify(users));
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
      const users = JSON.parse(localStorage.getItem("default_users") || "[]");
      const existingUser = users.find((user: User) => user.email === email);

      if (!existingUser) {
        throw new Error("Login failed: User not found");
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
