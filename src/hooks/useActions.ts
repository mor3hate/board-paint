import { globalActions } from '../store/rootActions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from './reduxHooks'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(globalActions, dispatch), [dispatch])
}
