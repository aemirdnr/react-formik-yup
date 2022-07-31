import { object, string, ref } from "yup";

const IF_BLANK = "You can't leave this blank.";

const Validation = object({
  userName: string().required(IF_BLANK),
  userPass: string()
    .required(IF_BLANK)
    .min(8, "Password can't be less than 8 digit.")
    .max(18, "Password can't be longer than 18 digit."),
  passAgain: string()
    .oneOf([ref("userPass")], "Passwords doesn't match.")
    .required(IF_BLANK),
  email: string().email("E-mail must be a valid mail.").required(IF_BLANK),
});

export default Validation;
