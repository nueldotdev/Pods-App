import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	containers: {
		flex: 1,
		flexDirection: 'column',
		height: '100%',
		// borderWidth: 1,
		width: '100%',
	},

	header: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 10,
		paddingTop: 50,
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},

	headerBtn: {
		// borderRadius: 7,
		// borderWidth: 1,
		padding: 5
	},

	scrollview: {
		backgroundColor: "#aaa"
	},

	horizontalContainer: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderBottomColor: '#eee',
		// marginBottom: 0,
	},
	card: {
		width: 170,
		height: 170,
		borderWidth: 2,
		borderColor: 'rgba(68, 68, 68, 0.61)',
		borderRadius: 7,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

	cardLayout: {
		width: 170,
		height: 170,
		borderRadius: 7,
		marginRight: 10,
		overflow: 'hidden',
		borderWidth: 2,
		borderColor: 'rgba(68, 68, 68, 0.61)',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(90, 92, 3, 0.27)',
	},

	blurCardOverlay: {
		...StyleSheet.absoluteFillObject, // Fill the parent View container entirely
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardText: {
		color: '#fff',
		fontWeight: 'bold',
		marginTop: 10
	},
	sectionHeader: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 15,
		marginTop: 15,
		color: 'rgb(48, 48, 48)',
	},
	listItem: {
		padding: 20,
		borderRadius: 10,
		marginHorizontal: 10,
		marginVertical: 5,
		backgroundColor: 'rgba(48, 48, 48, 0.27)',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	likedItem: {
		// padding: 5,
		// width: 100,
		// borderWidth: 1,
		// borderColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
	},

	savedName: {
		color: 'white'
	}
})



export { styles }