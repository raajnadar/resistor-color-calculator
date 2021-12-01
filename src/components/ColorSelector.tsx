import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
	activeDialog: string
	dialog: boolean
	color: any
	content: any
	handleChange: any
}

export default function ColorSelector(props: Props) {
	const { activeDialog, dialog, color, content, handleChange } = props

	return (
		<Dialog
			open={dialog}
			disableEscapeKeyDown
			fullWidth={true}
			maxWidth="sm"
			aria-labelledby="dialog-title">
			<DialogTitle id="dialog-title">Color selector</DialogTitle>
			<DialogContent>
				<RadioGroup
					aria-label="Color selector"
					name="color"
					value={color[activeDialog]}
					onChange={handleChange}>
					{content.map((color: string) => (
						<FormControlLabel
							key={color}
							value={color}
							control={<Radio />}
							label={color}
						/>
					))}
				</RadioGroup>
			</DialogContent>
		</Dialog>
	)
}
