import { createStyles } from "@mantine/core";
import { DateInput, DateInputProps } from "@mantine/dates";
import { colors } from "@/theme";

const useStyles = createStyles((theme) => ({
  input: {
    color: colors.primary,
    fontWeight: 600,
    border: "none",
  },
  activeInput: {
    color: colors.light,
    backgroundColor: colors.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    fontWeight: 600,
  },
  dropdown: {
    borderRadius: theme.radius.lg,
  },
  rightSection: {
    marginRight: 20,
    pointerEvents: "none",
  },
  day: {
    "&[data-selected]": {
      backgroundColor: colors.primary,
      position: "relative",
    },
  },
}));

const DateField = (props: DateInputProps) => {
  const { classes, cx } = useStyles();

  return (
    <DateInput
      placeholder="Date input"
      maw={400}
      mx="auto"
      // variant="filled"
      // radius="md"
      // size="xl"
      {...props}
      // styles={{
      //   input: cx(classes.input, {
      //     [classes.activeInput]: props.value,
      //   }),
      //   // dropdown: classes.dropdown,
      //   rightSection: classes.rightSection,
      //   day: classes.day,
      // }}
      classNames={{
        input: cx(classes.input, {
          [classes.activeInput]: props.value,
        }),
        // dropdown: classes.dropdown,
        rightSection: classes.rightSection,
        day: classes.day,
      }}
      // value={value}
      // onChange={setValue}
      // label="Date input"
      // placeholder="Date input"
      // maw={400}
      // mx="auto"
    />
  );
};

export default DateField;
