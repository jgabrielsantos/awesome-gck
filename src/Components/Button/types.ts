import { SizeType } from "../../../types"

type ButtonThemeType = 'primary' | 'secondary' | 'tertiary'

export type ButtonPropsType = {
  children: React.ReactNode
  size?: SizeType
  theme?: ButtonThemeType
  loading?: boolean
  disable?: boolean
  className?: string
  role?: string // prop strictly for testing purposes
}