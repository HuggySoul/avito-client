import { AD_CATEGORIES } from "../model/";

export type AdCategory = (typeof AD_CATEGORIES)[number];
// Базовый интерфейс объявления
interface BaseAd {
	id: number; // Уникальный идентификатор
	name: string; // Название
	description: string; // Описание
	location: string; // Локация
	photo?: string; // Фото (необязательно)
	type: AdCategory; // Категория объявления
}

// Интерфейсы для разных категорий
export interface RealEstateDetails {
	propertyType: string; // Тип недвижимости
	area: number; // Площадь
	rooms: number; // Количество комнат
	price: number; // Цена
}

export interface AutoDetails {
	brand: string; // Марка
	model: string; // Модель
	year?: number; // Год выпуска (опционально)
	mileage?: number; // Пробег (опционально)
}

export interface ServiceDetails {
	serviceType: string; // Тип услуги
	experience: number; // Опыт работы (лет)
	cost: number; // Стоимость
	workSchedule?: string; // График работы (опционально)
}

// Обобщённый тип объявления с дженериком
export type Ad<T> = BaseAd & T;
