import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setCredentials } from "../../lib/features/user/userSlice";
import { RootState } from "../../lib/store";
import AuthInput from "../input/input";

interface AuthFormProps {
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error: string | null;
  fields: Array<{ label: string; name: string; type: string }>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  loading,
  error,
  fields,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (error) {
      dispatch(setError(null)); // Reset error if the user starts typing
    }
  }, [user, error, dispatch]);

  const getFieldValue = (fieldName: string): string =>
    typeof user[fieldName as keyof typeof user] === "string"
      ? (user[fieldName as keyof typeof user] as string)
      : "";

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e); // Handle form submission
        }}
      >
        {fields.map((field) => (
          <AuthInput
            key={field.name}
            label={field.label}
            type={field.type}
            value={getFieldValue(field.name)}
            onChange={(e) =>
              dispatch(setCredentials({ [field.name]: e.target.value }))
            }
            required
            error={error && error.includes(field.name) ? error : undefined}
          />
        ))}
        <button
          className="bg-[#b3cde0] hover:bg-[#5bb0ec] p-4 rounded-full w-full mt-5 text-black font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? "Processing..." : title}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default AuthForm;
