import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
//   required: boolean;
  error?: string | string[];
  helperText?: string;
  textarea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const FormField = ({
  label,
  id,
  name,
  placeholder,
//   required,
  error,
  helperText,
  onChange,
  textarea,
}: FormFieldProps) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
        //   required={required}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
        //   required={required}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        />
      )}
      {helperText && (
        <p className="text-muted-foreground text-xs">{helperText}</p>
      )}
      {error && <p className="text-destructive text-xs">{Array.isArray(error) ? error[0] : error}</p>}
    </div>
  );
};

export default FormField;
