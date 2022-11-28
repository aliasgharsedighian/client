import * as yup from 'yup';


export const LoginSchema = yup.object().shape({
    userNameLog: yup.string().email("نام کاربری باید ایمیل معتبر باشد").required("ایمیل خود را وارد کنید"),
    passwordLog : yup.string().min(7,'رمز عبور حداقل باید 7 کاراکتر باشد').max(16).required("رمز عبور خود را وارد کنید")
})