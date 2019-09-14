<template>
    <div class="wrapper">
        <div class="wrapper-login">
            <Logo />
            <form
                v-if="isLogin"
                class="login-form">
                <AppControlInput v-model="formData.email" title="email"></AppControlInput>
                <AppControlInput v-model="formData.password" title="password"></AppControlInput>
                <div class="btn-field">
                    <AppButton
                        colorName="primary"
                        size="l"
                        @click="login"
                    >Sign in</AppButton>
                </div>
            </form>
            <form
                v-if="!isLogin"
                class="login-form">
                <AppControlInput v-model="formData.name" title="name"></AppControlInput>
                <AppControlInput v-model="formData.email" title="email"></AppControlInput>
                <AppControlInput v-model="formData.password" title="password"></AppControlInput>
                <div class="btn-field">
                    <AppButton
                        colorName="primary"
                        size="l"
                        @click="signup"
                    >Sign up</AppButton>
                </div>
            </form>
        </div>
        <div
            v-if="isLogin"
            class="switcher-box"
            @click="isLogin = !isLogin"
        >
            New to Warehouse? <button class="switcher-text" type="button">Sign up</button>
        </div>
        <div
            v-if="!isLogin"
            class="switcher-box"
            @click="isLogin = !isLogin"
        >
            Already have an account? <button class="switcher-text" type="button">Sign in</button>
        </div>
    </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import Logo from '~/components/Logo.vue';

export default {
    data() {
        return {
            formData: {
                password: '',
                email: '',
                name: ''
            },
            isLogin: true
        }
    },
    components: {
        AppControlInput,
        AppButton,
        Logo
    },
    methods: {
        login() {
            console.log('login')
        },
        signup() {
            console.log('sign up')
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    @apply h-screen p-6 flex flex-col justify-center items-center;
    background: #f2f2f2;
}

.wrapper-login {
    @apply flex items-center flex-col;
    width: 390px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px;
}

.login-form {
    @apply mt-10 flex flex-col items-center w-full;
}

.logo {
    font-size: 30px;
    font-weight: bold;
    color: $color-primary;
}

.btn-field {
    @apply mt-10;
}

.switcher-box {
    @apply mt-6;
}
.switcher-text {
    color: $color-primary;
    &,
    &:link,
    &:visited  {
        text-decoration: none;
        cursor: pointer;
    }
    &:active,
    &:focus {
        outline: none;
    }
}
</style>
