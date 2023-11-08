import React, { useState, useRef } from "react";
import ButtonsSection from "../ButtonsSection";

const TextEditor = () => {
  const [text, setText] = useState('');
  const contentEditableRef = useRef(null);
  const isBold = useRef(false);
  const [savedText, setSavedText] = useState('');

  const handleBold = () => {
    const contentEditable = contentEditableRef.current;
    const selectedText = window.getSelection().toString();

    if (contentEditable && selectedText) {
      if (isBold.current) {
        // Если текст уже жирный, убираем форматирование
        document.execCommand('removeFormat');
      } else {
        // Добавляем жирное форматирование
        const boldText = `<b>${selectedText}</b>`;
        document.execCommand('insertHTML', false, boldText);
      }
      isBold.current = !isBold.current; // Инвертируем состояние форматирования
    }
  };
  const handleItalic = () => {
    const contentEditable = contentEditableRef.current;
    const selectedText = window.getSelection().toString();

    if (contentEditable && selectedText) {
      if (isBold.current) {
        // Если текст уже жирный, убираем форматирование
        document.execCommand('removeFormat');
      } else {
        // Добавляем жирное форматирование
        const boldText = `<i>${selectedText}</i>`;
        document.execCommand('insertHTML', false, boldText);
      }
      isBold.current = !isBold.current; // Инвертируем состояние форматирования
    }
  };
  const handleUnderline = () => {
    const contentEditable = contentEditableRef.current;
    const selectedText = window.getSelection().toString();

    if (contentEditable && selectedText) {
      if (isBold.current) {
        // Если текст уже жирный, убираем форматирование
        document.execCommand('removeFormat');
      } else {
        // Добавляем жирное форматирование
        const boldText = `<u>${selectedText}</u>`;
        document.execCommand('insertHTML', false, boldText);
      }
      isBold.current = !isBold.current; // Инвертируем состояние форматирования
    }
  };
  const handleSaveSelection = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) setSavedText(selectedText);
  };
  const handleInsertText = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) document.execCommand('insertHTML', false, savedText);
  };
  const handleInsertBigText = () => {
    setText("Безусловно, консультация с широким активом представляет собой интересный эксперимент проверки первоочередных требований. Не следует, однако, забывать, что укрепление и развитие внутренней структуры требует от нас анализа стандартных подходов. Разнообразный и богатый опыт говорит нам, что дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для поставленных обществом задач.")
  };

  const items = [
    {title: "B", onclick: handleBold},
    {title: "I", onclick: handleItalic},
    {title: "U", onclick: handleUnderline},
    {title: "Copy", onclick: handleSaveSelection},
    {title: "Paste", onclick: handleInsertText},
    {title: "Start", onclick: handleInsertBigText},
  ]

  return (
    <div className="px-5">
      <div
        ref={contentEditableRef}
        contentEditable
        dangerouslySetInnerHTML={{ __html: text }}
        className="p-2 rounded w-full h-52 bg-orange-100"
      ></div>
      <ButtonsSection items={items}/>
      <div>Вы скопировали: {savedText}</div>
    </div>
  );
}

export default TextEditor