import { difference } from 'lodash';
import { getLogger } from '../logger';
import { getConfig } from '../config/config';
import { getTeamMembers } from '../datasaur/get-team-members';

export async function validateAssignment(assignees: { labelers: string[]; reviewers: string[] }) {
  const teamMembers = await getTeamMembers(getConfig().project.teamId);
  const memberEmails = Array.from(
    new Set(
      teamMembers.map((member) => {
        if (member.user && member.user.email) {
          return member.user.email;
        } else if (member.invitationEmail) {
          return member.invitationEmail;
        }
      }),
    ),
  );

  if (assignees.labelers.length === 0) {
    getLogger().warn(
      'no labeler is registered. To setup project assignment please configure your config.assignment settings.',
    );
  }

  const labelerEmailDiferrences = difference(assignees.labelers, memberEmails);
  if (labelerEmailDiferrences.length > 0) {
    getLogger().error('there are some labelers that have not been registered to the team.', {
      labeler: [...labelerEmailDiferrences],
    });
    throw new Error(`there are some labelers that haven't been registered to the team.`);
  }

  const reviewerEmailDiferrences = difference(assignees.reviewers, memberEmails);
  if (reviewerEmailDiferrences.length > 0) {
    getLogger().error('there are some reviewers that have not been registered to the team.', {
      reviewer: [...reviewerEmailDiferrences],
    });
    throw new Error(`there are some reviewers that haven't been registered to the team.`);
  }
}