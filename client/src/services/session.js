import router from "../router";
import { Login } from "./users";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
const session = {
    user: null,
    messages: [{ text: "hello world", type: "danger" },
        { text: "hello new paltz", type: "primary" }
    ],
    toRoute: '/feed',
    Login(handle, password) {
        try {
            const response = Login(handle, password);

            this.user = response.user;

            router.push(this.toRoute);
        } catch (error) {
            this.messages.push({ text: error.msg, type: 'danger' })
            NotificationProgrammatic.open({
                duration: 5000,
                message: error.msg,
                position: 'top-right',
                variant: 'danger',
                type: 'danger',
                closable: true,
                onClose: () => {
                    this.$oruga.notification.open('Custom notification closed!')
                }
            });
        }
    }
};

export default session;

//export function