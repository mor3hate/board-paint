import * as BiIcons from 'react-icons/bi'

export type typeBiIcon = {
	name: keyof typeof BiIcons
}

export default function BiIcon({ name }: typeBiIcon) {
	const IconComponent = BiIcons[name]

	return <IconComponent />
}
