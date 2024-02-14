import { Autocomplete, TextField } from '@mui/material';
import { CategoricalFieldProps, FieldInputOption } from '../utils/types';

function CategoricalField({
  label,
  options,
  onFieldChange,
  multiple,
  inputValue,
}: CategoricalFieldProps) {
  function handleSelectionChange(value: FieldInputOption | FieldInputOption[] | null): void {
    if (value === null) {
      onFieldChange(label, null);
    }
    else if (!Array.isArray(value)) {
      onFieldChange(label, [value]);
    } else {
      onFieldChange(label, value);
  }
  }
  return (
    <Autocomplete
      options={options.sort((a, b) => a.label.localeCompare(b.label))}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={inputValue}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label={label}
          placeholder="Select an option"
          className="w-full"
        />
      )}
      multiple={multiple}
      onChange={(_, value) => handleSelectionChange(value)}
    />
  );
}

CategoricalField.defaultProps = {
  multiple: false,
};

export default CategoricalField;
