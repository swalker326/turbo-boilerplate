import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import "./index.css";
import { Button, Input } from "ui";

export default () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty }
  } = useForm({
    mode: "onChange"
  });

  return (
    <>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <h1 className="text-3xl">React Hook Form DevTools</h1>
        <h2>Form State: {isDirty ? "Dirty" : "Clean"}</h2>

        <label htmlFor="test">Test</label>
        <Input {...register("test", { required: true })} />

        <Button type="button">Validate</Button>
        <Input type="submit" />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};
