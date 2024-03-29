import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import {actions} from '../store/favorites/favorites.slice'
import { getUserById } from "../store/user/user.actions"

const rootActions = {
    ...actions,
    getUserById,
}
export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch), [dispatch])
}