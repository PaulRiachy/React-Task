import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function APTextBox({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>

      <div className={type === "password" ? "password-wrapper" : ""}>
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        {type === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default APTextBox;
