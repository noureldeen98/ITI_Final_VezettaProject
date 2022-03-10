import React, {createContext} from 'react';

const langContext = createContext();
const LangProvider = langContext.Provider

export {
    langContext, LangProvider
}
