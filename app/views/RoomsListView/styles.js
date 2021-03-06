import { StyleSheet } from 'react-native';

import sharedStyles from '../Styles';
import { themes } from '../../constants/colors';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	list: {
		width: '100%'
	},
	listHeaderContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	dropdownContainerHeader: {
		height: 41,
		alignItems: 'center',
		flexDirection: 'row'
	},
	sortToggleContainerClose: {
		position: 'absolute',
		top: 0,
		width: '100%'
	},
	sortToggleText: {
		fontSize: 16,
		flex: 1,
		...sharedStyles.textRegular
	},
	queueToggleText: {
		fontSize: 16,
		flex: 1,
		...sharedStyles.textRegular
	},
	dropdownContainer: {
		width: '100%',
		position: 'absolute',
		top: 0,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	searchDropdownContainer: {
		flexGrow: 1
	},
	sortItemButton: {
		height: 57,
		justifyContent: 'center'
	},
	sortItemContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	sortItemText: {
		fontSize: 18,
		flex: 1,
		...sharedStyles.textRegular
	},
	backdrop: {
		...StyleSheet.absoluteFill
	},
	recentTitle: {
		marginLeft: 12,
		marginVertical: 4,
		fontSize: 16
	},
	recentBar: {
		margin: 8,
		flexDirection: 'row'
	},
	sortSeparator: {
		height: StyleSheet.hairlineWidth,
		marginHorizontal: 12,
		flex: 1
	},
	sortIcon: {
		width: 22,
		height: 22,
		marginHorizontal: 12
	},
	queueIcon: {
		marginHorizontal: 12
	},
	groupTitleContainer: {
		paddingHorizontal: 12,
		paddingTop: 17,
		paddingBottom: 10
	},
	groupTitle: {
		fontSize: 16,
		letterSpacing: 0.27,
		flex: 1,
		lineHeight: 24,
		...sharedStyles.textBold
	},
	serverHeader: {
		justifyContent: 'space-between'
	},
	serverHeaderText: {
		fontSize: 16,
		marginLeft: 12,
		...sharedStyles.textRegular
	},
	serverHeaderAdd: {
		fontSize: 16,
		marginRight: 12,
		paddingVertical: 10,
		...sharedStyles.textRegular
	},
	serverItem: {
		height: 68
	},
	serverItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 68
	},
	serverIcon: {
		width: 42,
		height: 42,
		marginHorizontal: 12,
		marginVertical: 13,
		borderRadius: 4,
		resizeMode: 'contain'
	},
	serverTextContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	serverName: {
		fontSize: 18,
		...sharedStyles.textSemibold
	},
	serverUrl: {
		fontSize: 16,
		...sharedStyles.textRegular
	},
	serverSeparator: {
		height: StyleSheet.hairlineWidth,
		marginLeft: 72
	},
	encryptionButton: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12
	},
	encryptionIcon: {
		...sharedStyles.textMedium
	},
	encryptionText: {
		flex: 1,
		fontSize: 16,
		marginHorizontal: 16,
		...sharedStyles.textMedium
	},
	omnichannelToggle: {
		marginRight: 12
	},
	newGroupModal: {
		margin: 0
	},
	icon: {
		width: 24,
		height: 24,
		padding: 4
	},
	listItem: {
		marginHorizontal: 12,
		padding: 4,
		borderRadius: 4
	},
	searchHeader: {
		margin: 16
	},
	searchContainer:{
		marginLeft: 24,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#c4c4c4'
	},
	searchText: {
		fontSize: 16,
		paddingVertical: 4
	},
	headerRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 8
	},
	headerTabRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 4,
		borderRadius: 8,
		// borderWidth: 1,
		// borderColor: '#c4c4c4',
		padding: 4
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	directoryHeader: {
		margin: 16
	},
	headerBtnGroup: {
		flexDirection: 'row',
		marginTop: 12
	},
	headerBtn: {

	}
});
