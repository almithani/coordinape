import React from 'react';

import { transparentize } from 'polished';

import { makeStyles } from '@material-ui/core';

import {
  FormModal,
  FormTextField,
  SkillToggles,
  AvatarUpload,
} from 'components';
import EditProfileForm from 'forms/EditProfileForm';
import { useApi } from 'hooks';
import { useMyProfile } from 'recoilState';

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: transparentize(0.3, theme.colors.text),
    padding: theme.spacing(0, 0, 1),
    margin: theme.spacing(4, 0, 2),
    borderBottom: '0.7px solid rgba(24, 24, 24, 0.1)',
    width: '60%',
    minWidth: 300,
    textAlign: 'center',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2, 2, 2),
    },
  },
}));

export const EditProfileModal = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const classes = useStyles();

  const myProfile = useMyProfile();
  const { updateMyProfile, updateAvatar } = useApi();

  if (!myProfile) {
    return <></>;
  }

  return (
    <EditProfileForm.FormController
      source={myProfile}
      submit={params =>
        updateMyProfile(params).then(onClose).catch(console.warn)
      }
    >
      {({ fields, errors, changedOutput, handleSubmit }) => (
        <FormModal
          onClose={onClose}
          open={open}
          title="Edit Profile"
          onSubmit={handleSubmit}
          submitDisabled={!changedOutput}
          errors={errors}
          size="large"
        >
          <h2 className={classes.sectionHeader}>Profile Image</h2>
          <AvatarUpload original={myProfile.avatar} commit={updateAvatar} />

          <h2 className={classes.sectionHeader}>Select Your Skills</h2>
          <div className={classes.skillsContainer}>
            <SkillToggles
              value={fields.skills.value}
              onChange={fields.skills.onChange}
            />
          </div>

          <h2 className={classes.sectionHeader}>Biography</h2>
          <FormTextField
            {...fields.bio}
            fullWidth
            placeholder="Tell us what you're working on"
            multiline
            rows={6}
          />

          <h2 className={classes.sectionHeader}>Links</h2>
          <div className={classes.links}>
            <FormTextField {...fields.twitter_username} label="Twitter" />
            <FormTextField {...fields.github_username} label="Github" />
            <FormTextField {...fields.telegram_username} label="Telegram" />
            <FormTextField {...fields.discord_username} label="Discord" />
            <FormTextField {...fields.medium_username} label="Medium" />
            <FormTextField {...fields.website} label="Website" />
          </div>
        </FormModal>
      )}
    </EditProfileForm.FormController>
  );
};
