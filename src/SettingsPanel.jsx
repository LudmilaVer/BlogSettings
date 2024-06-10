// 3. Компонент с 2 списками (select). Один для выбора размера шрифта, один для line-height
import React, { useContext } from "react";
import { BlogSettingsContext } from "./BlogSettingsProvider";

function SettingsPanel() {
  const { settings, setSettings } = useContext(BlogSettingsContext);

  const handleFontSizeChange = (e) => {
    setSettings({ ...settings, fontSize: e.target.value });
  };

  const handleLineHeightChange = (e) => {
    setSettings({ ...settings, lineHeight: e.target.value });
  };

  return (
    <div className="settings-panel">
      <h2>Settings</h2>
      <label>
        Font Size:
        <select value={settings.fontSize} onChange={handleFontSizeChange}>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="22px">22px</option>
          <option value="24px">24px</option>
        </select>
      </label>
      <label>
        Line Height:
        <select value={settings.lineHeight} onChange={handleLineHeightChange}>
          <option value="1">1</option>
          <option value="1.2">1.2</option>
          <option value="1.5">1.5</option>
          <option value="1.8">1.8</option>
          <option value="2">2</option>
        </select>
      </label>
    </div>
  );
}

export default SettingsPanel;
