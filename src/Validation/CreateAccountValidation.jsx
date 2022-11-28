import * as yup from 'yup';

export const CreateAccountSchema = yup.object().shape({
    firstName: yup.string().required("نام نباید خالی باشد"),
    lastName: yup.string().required("نام خانوادگی نباید خالی باشد"),
    userName: yup.string().email("ایمیل معتبر نیست").required("ایمیل نباید خالی باشد"),
    password: yup.string().min(8,'رمز عبور نمیتواند از 8 کاراکتر کمتر باشد').max(16,'رمز عبور نباید از 16 کاراکتر بیشتر باشد').required("رمز عبور نباید خالی باشد"),
    repPassword: yup.string().oneOf([yup.ref("password"), null])
});

