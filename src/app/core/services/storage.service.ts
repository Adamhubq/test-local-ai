import { Injectable } from '@angular/core';

/**
 * StorageService для безопасной работы с localStorage
 * Предоставляет типизированные методы для работы с хранилищем
 * Обрабатывает ошибки сериализации, некорректный JSON и недоступность localStorage
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly NAMESPACE = 'NOVA_STORE';

  /**
   * Получает значение из localStorage по ключу
   * @param key Ключ для получения значения
   * @returns Десериализованное значение или null, если ключ не найден или данные некорректны
   */
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`${this.NAMESPACE}_${key}`);
      
      if (item === null) {
        return null;
      }

      return JSON.parse(item);
    } catch (error) {
      console.warn(`Ошибка при чтении данных из localStorage для ключа "${key}":`, error);
      return null;
    }
  }

  /**
   * Сохраняет значение в localStorage по ключу
   * @param key Ключ для сохранения значения
   * @param value Значение для сохранения
   * @returns boolean Успешность операции
   */
  set<T>(key: string, value: T): boolean {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(`${this.NAMESPACE}_${key}`, serializedValue);
      return true;
    } catch (error) {
      console.warn(`Ошибка при записи данных в localStorage для ключа "${key}":`, error);
      return false;
    }
  }

  /**
   * Удаляет значение из localStorage по ключу
   * @param key Ключ для удаления значения
   * @returns boolean Успешность операции
   */
  remove(key: string): boolean {
    try {
      localStorage.removeItem(`${this.NAMESPACE}_${key}`);
      return true;
    } catch (error) {
      console.warn(`Ошибка при удалении данных из localStorage для ключа "${key}":`, error);
      return false;
    }
  }

  /**
   * Очищает все данные из localStorage с неймспейсом NOVA_STORE
   */
  clear(): void {
    try {
      const keysToRemove: string[] = [];
      
      // Собираем все ключи с нужным неймспейсом
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.NAMESPACE)) {
          keysToRemove.push(key);
        }
      }

      // Удаляем все ключи
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.warn('Ошибка при очистке localStorage:', error);
    }
  }
}