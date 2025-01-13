type User = {
    id: string,
    username: string,
    displayName: string,
    isLoggedIn: boolean,
    avatarUrl?: string,
    createdAt?: string,
}

type Events = {
    openLoginModal: boolean,
    openRegisterModal: boolean,
    openProfileModal: boolean,
}

type AuthModal = {
    title: string,
    formType: "login" | "register",
    closeModal: () => void,
}


export type { User, Events, AuthModal }