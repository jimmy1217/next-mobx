import { useRouter } from 'next/router'
import { useStore } from '@store'
import { useObserver } from "mobx-react";

const LoginForm = () => {
    const route = useRouter();
    const { loginStore } = useStore();

    return useObserver(() => {
        const { isLogin, account, password, onChangeStore, onSubmit } = loginStore;
        return (
            <form onSubmit={(e) => {
                onSubmit(e)
                setTimeout(() => {
                    route.push('/system')
                }, 800)
            }}>
                <div className={`top_card ${isLogin ? "fixed_top" : ""}`}>
                    <h4 name="login">Login</h4>
                </div>
                <div className="text-field">
                    <input
                        type="text"
                        name="account"
                        value={account}
                        placeholder="ex:jimmy"
                        onChange={onChangeStore}
                    />
                </div>
                <div className="text-field">
                    <input
                        type="password"
                        name="password"
                        placeholder="ex:123456"
                        value={password}
                        onChange={onChangeStore}
                    />
                </div>
                <div className="text-field btn btn-gray" onClick={(e) => {
                    onSubmit(e)
                    setTimeout(() => {
                        route.push('/system')
                    }, 800)
                }}>
                    Submit
            </div>
                <button type="submit" className="hidden"></button>
            </form>
        )
    })
}

export default LoginForm