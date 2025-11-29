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
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
		borderWidth: 2,
		borderColor: 'rgba(48, 48, 48, 0.61)',
    borderRadius: 7,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
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