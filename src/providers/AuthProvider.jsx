import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const ContextInfo = {name: "Md Rahat Hossen Antor"};

    return (
        <AuthContext.Provider value={ContextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;