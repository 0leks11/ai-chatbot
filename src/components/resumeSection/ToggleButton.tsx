// src/components/ToggleButton.tsx
import React from 'react';

interface ToggleButtonProps {
    label: string; // Текст кнопки
    isOpen?: boolean; // Состояние раскрытия
    onClick: () => void; // Функция обработки клика
    className?: string; // Дополнительные классы
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, isOpen = false, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`flex justify-between items-center w-full text-left font-semibold text-lg py-1 transition-all duration-300 ${className}`}
        >
            <span>{label}</span>
            <span
                className={`transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                }`}
            >
                ▼
            </span>
        </button>
    );
};

export default ToggleButton;