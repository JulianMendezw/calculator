import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';


const useStyles = makeStyles((theme) => ({
	root: {
		'& > svg': {
			margin: theme.spacing(2),
		},
	},
}));

function ExchangeIcon(props) {
	return (
		<CompareArrowsIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</CompareArrowsIcon>
	);
}

export default function SvgIconsColor() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ExchangeIcon />
		</div>
	);
}
