import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';
import Wrapper from './Wrapper';
import UnreadBadge from '../UnreadBadge';
import TypeIcon from './TypeIcon';
import LastMessage from './LastMessage';
import Title from './Title';
import UpdatedAt from './UpdatedAt';
import Touchable from './Touchable';

const RoomItem = ({
	rid,
	type,
	prid,
	name,
	avatar,
	width,
	avatarSize,
	username,
	showLastMessage,
	status,
	useRealName,
	theme,
	isFocused,
	isGroupChat,
	isRead,
	date,
	accessibilityLabel,
	favorite,
	lastMessage,
	alert,
	hideUnreadStatus,
	unread,
	userMentions,
	groupMentions,
	tunread,
	tunreadUser,
	tunreadGroup,
	testID,
	swipeEnabled,
	onPress,
	toggleFav,
	toggleRead,
	hideChannel
}) => (
	<Touchable
		onPress={onPress}
		width={width}
		favorite={favorite}
		toggleFav={toggleFav}
		isRead={isRead}
		rid={rid}
		toggleRead={toggleRead}
		hideChannel={hideChannel}
		testID={testID}
		type={type}
		theme={theme}
		isFocused={isFocused}
		swipeEnabled={swipeEnabled}
	>
		<Wrapper
			accessibilityLabel={accessibilityLabel}
			avatar={avatar}
			avatarSize={avatarSize}
			type={type}
			theme={theme}
			rid={rid}
			prid={prid}
			status={status}
			isGroupChat={isGroupChat}
		>
			{showLastMessage
				? (
					<>
						<View style={styles.titleContainer}>
							{ type !== 'd' ?
								<TypeIcon
									type={type}
									prid={prid}
									status={status}
									isGroupChat={isGroupChat}
									theme={theme}
								/>
								: null}
							<Title
								name={name}
								theme={theme}
								hideUnreadStatus={hideUnreadStatus}
								alert={alert}
							/>
							<UpdatedAt
								date={date}
								theme={theme}
								hideUnreadStatus={hideUnreadStatus}
								alert={alert}
							/>
						</View>
						<View style={styles.row}>
							<LastMessage
								lastMessage={lastMessage}
								type={type}
								showLastMessage={showLastMessage}
								username={username}
								alert={alert && !hideUnreadStatus}
								useRealName={useRealName}
								theme={theme}
							/>
							<UnreadBadge
								unread={unread}
								userMentions={userMentions}
								groupMentions={groupMentions}
								tunread={tunread}
								tunreadUser={tunreadUser}
								tunreadGroup={tunreadGroup}
							/>
						</View>
					</>
				)
				: (
					<View style={[styles.titleContainer, styles.flex]}>
						<Title
							name={name}
							theme={theme}
							hideUnreadStatus={hideUnreadStatus}
							alert={alert}
						/>
						<UnreadBadge
							unread={unread}
							userMentions={userMentions}
							groupMentions={groupMentions}
							tunread={tunread}
							tunreadUser={tunreadUser}
							tunreadGroup={tunreadGroup}
						/>
					</View>
				)
			}
		</Wrapper>
	</Touchable>
);

RoomItem.propTypes = {
	rid: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	prid: PropTypes.string,
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	showLastMessage: PropTypes.bool,
	username: PropTypes.string,
	avatarSize: PropTypes.number,
	testID: PropTypes.string,
	width: PropTypes.number,
	status: PropTypes.string,
	useRealName: PropTypes.bool,
	theme: PropTypes.string,
	isFocused: PropTypes.bool,
	isGroupChat: PropTypes.bool,
	isRead: PropTypes.bool,
	date: PropTypes.string,
	accessibilityLabel: PropTypes.string,
	lastMessage: PropTypes.object,
	favorite: PropTypes.bool,
	alert: PropTypes.bool,
	hideUnreadStatus: PropTypes.bool,
	unread: PropTypes.number,
	userMentions: PropTypes.number,
	groupMentions: PropTypes.number,
	tunread: PropTypes.array,
	tunreadUser: PropTypes.array,
	tunreadGroup: PropTypes.array,
	swipeEnabled: PropTypes.bool,
	toggleFav: PropTypes.func,
	toggleRead: PropTypes.func,
	onPress: PropTypes.func,
	hideChannel: PropTypes.func
};

RoomItem.defaultProps = {
	avatarSize: 48,
	status: 'offline',
	swipeEnabled: true
};

export default RoomItem;
