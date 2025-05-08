import React, { useEffect, useRef, useState } from 'react'
import { Input } from 'antd'

type ValidationResult = string | boolean
type ValidationRule =
  | ValidationResult
  | PromiseLike<ValidationResult>
  | ((value: any) => ValidationResult)
  | ((value: any) => PromiseLike<ValidationResult>)

interface AppInputProps {
  value: string
  onChange: (val: string) => void
  type?: string
  label?: string
  prefix?: string
  postfix?: string
  rules?: ValidationRule[]
}

export const AppInput: React.FC<AppInputProps> = ({
  value,
  onChange,
  type = 'text',
  label,
  prefix,
  postfix,
  rules = []
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [errorMessage, setErrorMessage] = useState<string | boolean>('')
  const inputRef = useRef<any>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    setInputValue(newVal)
    onChange(newVal)
  }

  const handleBlur = () => {
    validate()
  }

  const validate = async () => {
    for (const rule of rules) {
      const handler = typeof rule === 'function' ? rule : () => rule
      const result = await handler(inputValue)

      if (result === true) continue
      if (result !== false && typeof result !== 'string') continue

      setErrorMessage(result)
      return false
    }

    setErrorMessage(false)
    return true
  }

  return (
    <div className="app-input-field flex">
      {/* Error indicator stripe */}
      <div
          className={`shrink-0 bg-systemMessage-error transition-[width,margin] duration-300 ${
              errorMessage ? 'w-1 mr-4' : 'w-0 mr-0'
          }`}

      />

      <label className="w-full flex flex-col gap-1">
        {label && <div className="font-semibold">{label}</div>}
        {errorMessage && typeof errorMessage === 'string' && (
          <div className="font-semibold text-systemMessage-error">
            {errorMessage}
          </div>
        )}

        <div
            className={`app-input-field-content flex border rounded overflow-hidden ${
                errorMessage ? 'border-systemMessage-error' : 'border-black'
            }`}

        >
          {prefix && (
            <div
                className={`px-3 py-2 shrink-0 border-r bg-text-200 flex items-center rounded-s-[3px] ${
                    errorMessage ? 'border-systemMessage-error' : 'border-black'
                }`}

            >
              {prefix}
            </div>
          )}

          <Input
            ref={inputRef}
            type={type}
            value={inputValue}
            onChange={handleInput}
            onBlur={handleBlur}
            className="border-none shadow-none p-2 w-full focus:outline-none focus:ring-0"

          />

          {postfix && (
            <div
                className={`px-3 py-2 shrink-0 border-l bg-text-200 flex items-center rounded-e-[3px] ${
                    errorMessage ? 'border-systemMessage-error' : 'border-black'
                }`}

            >
              {postfix}
            </div>
          )}
        </div>
      </label>
    </div>
  )
}
