export function isAuthenticated() {
    // Перевіряємо, чи є токен в localStorage або куках
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token;  // Якщо токен є, користувач авторизований
    }
    return false;
  }