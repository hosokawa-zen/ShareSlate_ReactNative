import { StyleSheet } from 'react-native';

import sharedStyles from '../../views/Styles';
import { isTablet } from '../../utils/deviceInfo';

export default StyleSheet.create({
	root: {
		flexDirection: 'row'
	},
	container: {
		paddingVertical: 2,
		paddingHorizontal: 14,
		flexDirection: 'column'
	},
	ownerContainer: {
		width: '100%',
		paddingVertical: 2,
		paddingHorizontal: 14,
		flexDirection: 'column',
		flex: 1
	},
	contentContainer: {
		flex: 1
	},
	messageContent: {
		flex: 1,
		marginLeft: 46,
		alignItems: 'flex-start'
	},
	ownerMessageContent: {
		flex: 1,
		marginRight: 46,
		alignItems: 'flex-end'
	},
	messageContentWithHeader: {
		marginLeft: 10
	},
	ownerMessageContentWithHeader: {
		marginRight: 10
	},
	messageContentWithError: {
		marginLeft: 0
	},
	flex: {
		flexDirection: 'row',
		flex: 1
	},
	temp: { opacity: 0.3 },
	ownerTextContainer: {
		alignItems: 'flex-end',
		backgroundColor: '#f5f7fb',
		padding: 8,
		borderRadius: 8
	},
	textContainer: {
		backgroundColor: '#8599AD',
		padding: 8,
		borderRadius: 8
	},
	marginTop: {
		marginTop: 6
	},
	reactionsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 8
	},
	reactionButton: {
		marginRight: 8,
		marginBottom: 8,
		borderRadius: 2
	},
	reactionContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		borderWidth: 1,
		height: 28,
		minWidth: 46.3
	},
	reactionCount: {
		fontSize: 14,
		marginLeft: 3,
		marginRight: 8.5,
		...sharedStyles.textSemibold
	},
	reactionEmoji: {
		fontSize: 13,
		marginLeft: 7,
		color: '#ffffff'
	},
	reactionCustomEmoji: {
		width: 19,
		height: 19,
		marginLeft: 7
	},
	avatar: {
		marginTop: 4
	},
	avatarSmall: {
		marginLeft: 16
	},
	errorButton: {
		paddingLeft: 10,
		paddingVertical: 5
	},
	buttonContainer: {
		marginTop: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 2
	},
	buttonIcon: {
		marginRight: 8
	},
	buttonText: {
		fontSize: 12,
		...sharedStyles.textSemibold
	},
	imageContainer: {
		//flex: 1,
		flexDirection: 'column',
		borderRadius: 4,
		width: 120
	},
	image: {
		width: '100%',
		// maxWidth: 400,
		minHeight: isTablet ? 300 : 200,
		borderRadius: 4,
		borderWidth: 1,
		overflow: 'hidden'
	},
	imagePressed: {
		opacity: 0.5
	},
	inlineImage: {
		width: 300,
		height: 300,
		resizeMode: 'contain'
	},
	text: {
		fontSize: 16,
		...sharedStyles.textRegular
	},
	textInfo: {
		fontStyle: 'italic',
		fontSize: 16,
		...sharedStyles.textRegular
	},
	startedDiscussion: {
		fontStyle: 'italic',
		fontSize: 16,
		marginBottom: 6,
		...sharedStyles.textRegular
	},
	time: {
		fontSize: 12,
		marginHorizontal: 8,
		...sharedStyles.textRegular
	},
	repliedThread: {
		flexDirection: 'row',
		// flex: 1,
		alignItems: 'center',
		marginTop: 6,
		marginBottom: 12
	},
	repliedThreadIcon: {
		marginRight: 10,
		marginLeft: 16
	},
	repliedThreadName: {
		fontSize: 16,
		flex: 1,
		...sharedStyles.textRegular
	},
	repliedThreadDisclosure: {
		marginLeft: 4,
		marginRight: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	threadBadge: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginLeft: 8
	},
	threadBell: {
		marginLeft: 8
	},
	readReceipt: {
		lineHeight: 20
	},
	encrypted: {
		justifyContent: 'center'
	}
});
