import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToastOptions {
  title: string;
  description?: string;
  duration?: number; // ms
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastState extends ToastOptions {
  id: number;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const [id, setId] = useState(0);

  const toast = (options: ToastOptions) => {
    const toastId = id + 1;
    setId(toastId);
    setToasts((prev) => [
      ...prev,
      { ...options, id: toastId, duration: options.duration || 3000 },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, options.duration || 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 min-w-[250px]"
          >
            <div className="font-semibold text-gray-900">{t.title}</div>
            {t.description && (
              <div className="text-gray-700 text-sm mt-1">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
