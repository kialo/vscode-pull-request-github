import { get, post } from './callMethod';
import * as MessageTypes from './MessageTypes';

/**
 * Accepts the end user agreement for a given user
 */
export function acceptUserAgreement(): Promise<MessageTypes.VoidMessage> {
	return post('acceptUserAgreement');
}

/**
 * Returns the text of the end user agreement
 */
export function getUserAgreementText(): Promise<MessageTypes.UserAgreementTextDTO> {
	return get('getUserAgreementText');
}

/**
 * In the case of an empty request, returns the list of all short project infos. Otherwise returns the list of project infos for a given set of project IDs. In any case only the projects the user has access to are returned.
 */
export function getAllProjects(request: MessageTypes.ProjectIdListDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
	return get('getAllProjects', request);
}

/**
 * Returns the list of projects  matching a given search criteria
 */
export function findProjects(request: MessageTypes.FindProjectsRequestDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
	return get('findProjects', request);
}

/**
 * Returns basic information about the project - name, project model, latest revision, etc.
 */
export function getProjectInfo(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectInfoDTO> {
	return get('getProjectInfo', request);
}

/**
 * Returns VCS repository URL(s) for a given project
 */
export function getProjectVcsLinks(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VcsRepoListDTO> {
	return get('getProjectVcsLinks', request);
}

/**
 * Returns README (README.md) contents from the latest revision
 */
export function getProjectReadme(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectReadmeResponseDTO> {
	return get('getProjectReadme', request);
}

/**
 * Returns all registered code review patterns across all projects
 */
export function getCodeReviewPatterns(): Promise<MessageTypes.CodeReviewPatternsDTO> {
	return get('getCodeReviewPatterns');
}

/**
 * Returns the revision descriptor for the latest revision - ID, date, commit message, authors, parent revisions, etc.
 */
export function getHeadRevision(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.RevisionInfoDTO> {
	return get('getHeadRevision', request);
}

/**
 * Returns the list of revisions in a given project (optionally with revision graph)
 */
export function getRevisionsList(request: MessageTypes.RevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return get('getRevisionsList', request);
}

/**
 * Returns the list of revisions that match the given search query
 */
export function getRevisionsListFiltered(request: MessageTypes.RevisionsListFilteredRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return get('getRevisionsListFiltered', request);
}

/**
 * Returns the list of revisions across all projects authored by the specified user and (optionally) matching the specified query
 */
export function getUserRevisionsList(request: MessageTypes.UserRevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return get('getUserRevisionsList', request);
}

/**
 * Returns the list of revisions since the given revision
 */
export function getRevisionsListUpdate(request: MessageTypes.RevisionsListUpdateRequestDTO): Promise<MessageTypes.RevisionsListUpdateResponseDTO> {
	return get('getRevisionsListUpdate', request);
}

/**
 * Returns the revision descriptor - ID, date, commit message, authors, parent revisions, etc.
 */
export function getRevisionInfo(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionInfoDTO> {
	return get('getRevisionInfo', request);
}

/**
 * Returns the list of changes (files that were added, removed, or modified) in a revision
 */
export function getRevisionChanges(request: MessageTypes.RevisionChangesRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return get('getRevisionChanges', request);
}

/**
 * Returns the list of branches a revision is part of
 */
export function getRevisionBranches(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionBranchesResponseDTO> {
	return get('getRevisionBranches', request);
}

/**
 * Returns the project structure tree starting from the given file
 */
export function getProjectSubtree(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.ProjectItemsListDTO> {
	return get('getProjectSubtree', request);
}

/**
 * Returns meta information about a file (is deleted, is latest revision, etc.)
 */
export function getFileMeta(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileMetaResponseDTO> {
	return get('getFileMeta', request);
}

/**
 * Returns the line-by-line file annotation
 */
export function getFileAnnotation(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileAnnotationResponseDTO> {
	return get('getFileAnnotation', request);
}

/**
 * Returns the file contributors
 */
export function getFileContributors(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContributorsResponseDTO> {
	return get('getFileContributors', request);
}

/**
 * Returns the authors of the given file fragment
 */
export function getFileFragmentAuthors(request: MessageTypes.FileFragmentAuthorsRequestDTO): Promise<MessageTypes.UsersListDTO> {
	return get('getFileFragmentAuthors', request);
}

/**
 * Returns the history (list of revision IDs and change types) of the file
 */
export function getFileHistory(request: MessageTypes.FileHistoryRequestDTO): Promise<MessageTypes.FileHistoryResponseDTO> {
	return get('getFileHistory', request);
}

/**
 * Returns the diff (changed lines and ranges) between the given revisions of a file
 */
export function getFileDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
	return get('getFileDiff', request);
}

/**
 * Returns the inline diff (changed lines and ranges, line numbers mapping) for the given file
 */
export function getFileInlineDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return get('getFileInlineDiff', request);
}

/**
 * Returns the inline diff of a file after the merge with the base branch
 */
export function getFileMergeInlineDiff(request: MessageTypes.FileMergeInlineDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return get('getFileMergeInlineDiff', request);
}

/**
 * Returns the contents of the given file
 */
export function getFileContent(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContentResponseDTO> {
	return get('getFileContent', request);
}

/**
 * Returns the semantic markup of the given file
 */
export function getFilePsi(request: MessageTypes.FilePsiRequestDTO): Promise<MessageTypes.FilePsiResponseDTO> {
	return get('getFilePsi', request);
}

/**
 * Returns the text range of the given PSI element
 */
export function getStubNavigationRange(request: MessageTypes.StubIdDTO): Promise<MessageTypes.NavigationTargetItemDTO> {
	return get('getStubNavigationRange', request);
}

/**
 * Returns the text representation of the given PSI element
 */
export function getElementDescription(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.TargetDescriptionDTO> {
	return get('getElementDescription', request);
}

/**
 * Returns the documentation (e.g. Javadoc) for the given PSI element
 */
export function getElementDocumentation(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.ElementDocumentationDTO> {
	return get('getElementDocumentation', request);
}

/**
 * Returns the list of usages for the given PSI element
 */
export function findUsages(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindUsagesResponseDTO> {
	return get('findUsages', request);
}

/**
 * Returns the usages diff for the given PSI element between two revisions
 */
export function getUsagesDiff(request: MessageTypes.UsagesDiffRequestDTO): Promise<MessageTypes.UsagesDiffResponseDTO> {
	return get('getUsagesDiff', request);
}

/**
 * Returns the list of inheritors and ancestors for the given PSI element
 */
export function findHierarchy(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindHierarchyResultDTO> {
	return get('findHierarchy', request);
}

/**
 * Returns the files matched by the search query in a given revision, review, project-wide, or service-wide
 */
export function gotoFileByName(request: MessageTypes.GotoFileRequestDTO): Promise<MessageTypes.GotoFileResponseDTO> {
	return post('gotoFileByName', request);
}

/**
 * Performs full-text search across all commits and files (either service-wide or project-wide)
 */
export function textSearch(request: MessageTypes.TextSearchRequestDTO): Promise<MessageTypes.TextSearchResponseDTO> {
	return post('textSearch', request);
}

/**
 * Performs project-wide search by branch name
 */
export function findBranches(request: MessageTypes.FindBranchRequestDTO): Promise<MessageTypes.FindBranchResponseDTO> {
	return get('findBranches', request);
}

/**
 * Returns the list of changes in the given branch
 */
export function getBranchDiff(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return get('getBranchDiff', request);
}

/**
 * Returns the list of changes between any two revisions
 */
export function getRevisionsDiff(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return get('getRevisionsDiff', request);
}

/**
 * Compare page
 */
export function getCompareInfo(request: MessageTypes.CompareRequestDTO): Promise<MessageTypes.CompareInfoDTO> {
	return get('getCompareInfo', request);
}

/**
 * Revision graph for compare page
 */
export function getCompareGraph(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.CompareGraphDTO> {
	return get('getCompareGraph', request);
}

/**
 * Branch page
 */
export function getBranchInfo(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchInfoDTO> {
	return get('getBranchInfo', request);
}

/**
 * Revision graph for branch page
 */
export function getBranchGraph(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchGraphDTO> {
	return get('getBranchGraph', request);
}

/**
 * Returns the list of branches in a project
 */
export function getBranches(request: MessageTypes.BranchesRequestDTO): Promise<MessageTypes.BranchListDTO> {
	return get('getBranches', request);
}

/**
 * Finds commit(s) with the given commit hash
 */
export function findCommits(request: MessageTypes.FindCommitsRequestDTO): Promise<MessageTypes.FindCommitsResponseDTO> {
	return get('findCommits', request);
}

/**
 * Returns the discussions in the project, matching given query
 */
export function getProjectDiscussions(request: MessageTypes.DiscussionsInProjectRequestDTO): Promise<MessageTypes.DiscussionsInProjectDTO> {
	return get('getProjectDiscussions', request);
}

/**
 * Returns the discussions in the given file
 */
export function getFileDiscussions(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.DiscussionsInFileDTO> {
	return get('getFileDiscussions', request);
}

/**
 * Returns the discussions in the given revision
 */
export function getInlineDiscussionsInRevision(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
	return get('getInlineDiscussionsInRevision', request);
}

/**
 * Creates a new discussion
 */
export function createDiscussion(request: MessageTypes.CreateDiscussionRequestDTO): Promise<MessageTypes.DiscussionInFileDTO> {
	return post('createDiscussion', request);
}

/**
 * Updates a discussion
 */
export function resolveDiscussion(request: MessageTypes.ResolveDiscussionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('resolveDiscussion', request);
}

/**
 * Checks if current user can resolve the given discussion
 */
export function getCurrentUserCanResolveDiscussion(request: MessageTypes.DiscussionIdDTO): Promise<MessageTypes.VoidMessage> {
	return get('getCurrentUserCanResolveDiscussion', request);
}

/**
 * Adds a label to a discussion
 */
export function addDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return post('addDiscussionLabel', request);
}

/**
 * Adds a label to a review
 */
export function addReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
	return post('addReviewLabel', request);
}

/**
 * Removes a label from a discussion
 */
export function removeDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('removeDiscussionLabel', request);
}

/**
 * Removes a label from a review
 */
export function removeReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
	return post('removeReviewLabel', request);
}

/**
 * Stars a discussion
 */
export function starDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('starDiscussion', request);
}

/**
 * Toggles the read/unread state of a discussion
 */
export function readDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('readDiscussion', request);
}

/**
 * Adds a comment to the discussion
 */
export function addComment(request: MessageTypes.AddCommentRequestDTO): Promise<MessageTypes.CommentDTO> {
	return post('addComment', request);
}

/**
 * Updates the comment
 */
export function updateComment(request: MessageTypes.UpdateCommentRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
	return post('updateComment', request);
}

/**
 * Removes the comment
 */
export function removeComment(request: MessageTypes.RemoveCommentRequestDTO): Promise<MessageTypes.RemoveCommentResponseDTO> {
	return post('removeComment', request);
}

/**
 * Updates the task list embedded in a comment
 */
export function updateTaskList(request: MessageTypes.UpdateTaskListRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
	return post('updateTaskList', request);
}

/**
 * Adds or removes a reaction to a specified target
 */
export function toggleReaction(request: MessageTypes.ToggleReactionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('toggleReaction', request);
}

/**
 * Returns the news feed
 */
export function getFeed(request: MessageTypes.FeedRequestDTO): Promise<MessageTypes.FeedDTO> {
	return get('getFeed', request);
}

/**
 * Returns the discussions in the given revision
 */
export function getRevisionDiscussions(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInRevisionDTO> {
	return get('getRevisionDiscussions', request);
}

/**
 * Returns short review information for a set of revisions
 */
export function getRevisionReviewInfo(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionReviewInfoListDTO> {
	return get('getRevisionReviewInfo', request);
}

/**
 * Returns review suggestions for a set of revisions
 */
export function getSuggestedReviewsForRevisions(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.SuggestedReviewListDTO> {
	return get('getSuggestedReviewsForRevisions', request);
}

/**
 * Returns review suggestion for the uncommitted revision
 */
export function getSuggestedReviewForGhosts(request: MessageTypes.UncommittedRevisionDTO): Promise<MessageTypes.ReviewSuggestDTO> {
	return get('getSuggestedReviewForGhosts', request);
}

/**
 * Returns discussion counters for a set of revisions
 */
export function getRevisionDiscussionCounters(request: MessageTypes.RevisionDiscussionCountersRequestDTO): Promise<MessageTypes.RevisionDiscussionCountersListDTO> {
	return get('getRevisionDiscussionCounters', request);
}

/**
 * Returns build status for revisions
 */
export function getRevisionBuildStatus(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionBuildStatusListDTO> {
	return get('getRevisionBuildStatus', request);
}

/**
 * Returns the code ownership summary for given revisions
 */
export function getRevisionsOwnershipSummary(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsOwnershipSummaryDTO> {
	return get('getRevisionsOwnershipSummary', request);
}

/**
 * Returns the diff of external inspections compared to the previous run
 */
export function getRevisionsExternalInspectionsDiff(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsExternalInspectionsDiffResponseDTO> {
	return get('getRevisionsExternalInspectionsDiff', request);
}

/**
 * Returns the suggested users to be mentioned in a comment
 */
export function getUsersForMention(request: MessageTypes.UsersForMentionRequestDTO): Promise<MessageTypes.UsersListDTO> {
	return get('getUsersForMention', request);
}

/**
 * Returns the suggested reviewers for a given review
 */
export function getUsersForReview(request: MessageTypes.UsersForReviewRequestDTO): Promise<MessageTypes.UsersForReviewDTO> {
	return get('getUsersForReview', request);
}

/**
 * Returns the list of non-empty user groups relevant to a given project
 */
export function getProjectUserGroups(request: MessageTypes.ProjectUserGroupsRequestDTO): Promise<MessageTypes.UserGroupsListDTO> {
	return get('getProjectUserGroups', request);
}

/**
 * Returns the list of user groups by given IDs
 */
export function getUserGroupsByIds(request: MessageTypes.UserGroupsIdsListDTO): Promise<MessageTypes.UserGroupsListDTO> {
	return get('getUserGroupsByIds', request);
}

/**
 * Returns the list of users matching a given search criteria
 */
export function findUsers(request: MessageTypes.FindUsersRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
	return get('findUsers', request);
}

/**
 * Returns the list of discussion labels
 */
export function getLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
	return get('getLabels', request);
}

/**
 * Returns the list of review labels
 */
export function getReviewLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
	return get('getReviewLabels', request);
}

/**
 * Returns the list of reviews
 */
export function getReviews(request: MessageTypes.ReviewsRequestDTO): Promise<MessageTypes.ReviewListDTO> {
	return get('getReviews', request);
}

/**
 * Creates a review
 */
export function createReview(request: MessageTypes.CreateReviewRequestDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
	return post('createReview', request);
}

/**
 * Closes a review
 */
export function closeReview(request: MessageTypes.CloseReviewRequestDTO): Promise<MessageTypes.CloseReviewResponseDTO> {
	return post('closeReview', request);
}

/**
 * Renames a review
 */
export function renameReview(request: MessageTypes.RenameReviewRequestDTO): Promise<MessageTypes.RenameReviewResponseDTO> {
	return post('renameReview', request);
}

/**
 * Sets review description
 */
export function editReviewDescription(request: MessageTypes.EditReviewDescriptionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('editReviewDescription', request);
}

/**
 * Returns review details
 */
export function getReviewDetails(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
	return get('getReviewDetails', request);
}

/**
 * Returns the code ownership summary for a given review
 */
export function getReviewOwnershipSummary(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewOwnershipSummaryDTO> {
	return get('getReviewOwnershipSummary', request);
}

/**
 * Returns participants' progress in a given review
 */
export function getReviewProgress(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewProgressDTO> {
	return get('getReviewProgress', request);
}

/**
 * Returns the diff of inspections between two revisions
 */
export function getReviewInspectionsDiff(request: MessageTypes.ReviewInspectionsDiffRequestDTO): Promise<MessageTypes.InspectionsDiffDTO> {
	return get('getReviewInspectionsDiff', request);
}

/**
 * Attaches a revision to a review
 */
export function addRevisionToReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
	return post('addRevisionToReview', request);
}

/**
 * Initiates branch tracking for a given review
 */
export function startBranchTracking(request: MessageTypes.StartBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('startBranchTracking', request);
}

/**
 * Stops branch tracking for a given review
 */
export function stopBranchTracking(request: MessageTypes.StopBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('stopBranchTracking', request);
}

/**
 * Rebase the review to a single squashed revision
 */
export function squashReviewRevisions(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return post('squashReviewRevisions', request);
}

/**
 * Removes a revision from a review
 */
export function removeRevisionFromReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
	return post('removeRevisionFromReview', request);
}

/**
 * Returns the list of revisions in a review
 */
export function getRevisionsInReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.RevisionsInReviewResponseDTO> {
	return get('getRevisionsInReview', request);
}

/**
 * Returns the list of suggested revisions for a particular review
 */
export function getSuggestedRevisionsForReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.SuggestedRevisionListDTO> {
	return get('getSuggestedRevisionsForReview', request);
}

/**
 * Adds a participant (reviewer or watcher) to a review
 */
export function addParticipantToReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('addParticipantToReview', request);
}

/**
 * Adds a group of participants (reviewers or watchers) to a review
 */
export function addGroupToReview(request: MessageTypes.AddGroupToReviewRequestDTO): Promise<MessageTypes.AddGroupToReviewResponseDTO> {
	return post('addGroupToReview', request);
}

/**
 * Updates the participant's state
 */
export function updateParticipantInReview(request: MessageTypes.UpdateParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('updateParticipantInReview', request);
}

/**
 * Removes a participant from a review
 */
export function removeParticipantFromReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('removeParticipantFromReview', request);
}

/**
 * Mutes activities taking place in a certain review or cancels muting that was previously set
 */
export function toggleReviewMuted(request: MessageTypes.ToggleReviewMutedRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('toggleReviewMuted', request);
}

/**
 * Sets/clears review due date
 */
export function setReviewDeadline(request: MessageTypes.ReviewDeadlineRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setReviewDeadline', request);
}

/**
 * Merge review: sets target branch
 */
export function setReviewTargetBranch(request: MessageTypes.ReviewTargetBranchDTO): Promise<MessageTypes.VoidMessage> {
	return post('setReviewTargetBranch', request);
}

/**
 * Returns the list of changes (sum of all revisions) in a review
 */
export function getReviewSummaryChanges(request: MessageTypes.ReviewSummaryChangesRequestDTO): Promise<MessageTypes.ReviewSummaryChangesResponseDTO> {
	return get('getReviewSummaryChanges', request);
}

/**
 * Returns the diff (sum of all revisions) of a file in review
 */
export function getFileInReviewSummaryInlineChanges(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return get('getFileInReviewSummaryInlineChanges', request);
}

/**
 * Returns the diff (sum of all revisions) of a file in review
 */
export function getFileInReviewSummaryDiff(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
	return get('getFileInReviewSummaryDiff', request);
}

/**
 * Track file read status
 */
export function setFileInReviewReadStatus(request: MessageTypes.FileInReviewReadStatusRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setFileInReviewReadStatus', request);
}

/**
 * Returns the review discussions
 */
export function getReviewSummaryDiscussions(request: MessageTypes.ReviewSummaryDiscussionsRequestDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
	return get('getReviewSummaryDiscussions', request);
}

/**
 * Removes the review
 */
export function removeReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return post('removeReview', request);
}

/**
 * Returns matching revisions for stacktrace
 */
export function getMatchingRevisionsForStacktrace(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.MatchingRevisionsResponseDTO> {
	return get('getMatchingRevisionsForStacktrace', request);
}

/**
 * Returns full paths and vcs commit ids for lines of stacktrace in context of revision
 */
export function getStacktraceInContextOfRevision(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.StacktracePositionsDTO> {
	return get('getStacktraceInContextOfRevision', request);
}

/**
 * Returns the user info for a currently logged-in user
 */
export function getCurrentUser(): Promise<MessageTypes.CurrentUserResponseDTO> {
	return get('getCurrentUser');
}

/**
 * Checks if current user can close given review
 */
export function getCurrentUserCanCloseReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return get('getCurrentUserCanCloseReview', request);
}

/**
 * Checks if current user can delete given review
 */
export function getCurrentUserCanDeleteReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return get('getCurrentUserCanDeleteReview', request);
}

/**
 * Returns user info for given users
 */
export function getUserInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
	return get('getUserInfo', request);
}

/**
 * Returns presence info for given users
 */
export function getUsersPresenceInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UsersPresenceInfoResponseDTO> {
	return get('getUsersPresenceInfo', request);
}

/**
 * Maps a VCS username/email to a Hub account
 */
export function bindVcsUsername(request: MessageTypes.BindVcsUsernameRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('bindVcsUsername', request);
}

/**
 * Returns the list of projects the specified user contributed to
 */
export function getUserProjects(request: MessageTypes.UserProjectsRequestDTO): Promise<MessageTypes.UserProjectsResponseDTO> {
	return get('getUserProjects', request);
}

/**
 * Sets or clears a user absence
 */
export function setUserAbsence(request: MessageTypes.UserAbsenceRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setUserAbsence', request);
}

/**
 * Returns the value of a user setting by name
 */
export function getUserSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return get('getUserSetting', request);
}

/**
 * Updates the value of a user setting by name
 */
export function setUserSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setUserSetting', request);
}

/**
 * Returns the value of a cluster-wide setting by name
 */
export function getClusterSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return get('getClusterSetting', request);
}

/**
 * Updates the value of a cluster-wide setting by name
 */
export function setClusterSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setClusterSetting', request);
}

/**
 * Sets the server motto
 */
export function setMotto(request: MessageTypes.SetMottoRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setMotto', request);
}

/**
 * Returns the value of a project setting by name
 */
export function getProjectSetting(request: MessageTypes.GetProjectSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return get('getProjectSetting', request);
}

/**
 * Updates the value of a project setting by name
 */
export function setProjectSetting(request: MessageTypes.SetProjectSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('setProjectSetting', request);
}

/**
 * Creates a project
 */
export function createProject(request: MessageTypes.CreateProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('createProject', request);
}

/**
 * Loads project settings
 */
export function loadProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectSettingsDTO> {
	return post('loadProject', request);
}

/**
 * Updates project settings
 */
export function editProject(request: MessageTypes.EditProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('editProject', request);
}

/**
 * Deletes a project
 */
export function deleteProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
	return post('deleteProject', request);
}

/**
 * Completely reset a project
 */
export function resetProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
	return post('resetProject', request);
}

/**
 * Loads project settings
 */
export function getProjectConfigurationParameters(): Promise<MessageTypes.ProjectConfigurationResponseDTO> {
	return get('getProjectConfigurationParameters');
}

/**
 * Loads VCS Hosting services
 */
export function getVcsHostingServices(request: MessageTypes.VcsHostingRequestDTO): Promise<MessageTypes.VcsHostingResponseDTO> {
	return get('getVcsHostingServices', request);
}

/**
 * Creates/updates a discussion label in a project
 */
export function createOrEditLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return post('createOrEditLabel', request);
}

/**
 * Creates/updates a review label in a project
 */
export function createOrEditReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return post('createOrEditReviewLabel', request);
}

/**
 * Hides predefined discussion labels in a project
 */
export function hidePredefinedLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('hidePredefinedLabels', request);
}

/**
 * Hides predefined review labels in a project
 */
export function hidePredefinedReviewLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('hidePredefinedReviewLabels', request);
}

/**
 * Deletes a discussion label from a project
 */
export function deleteLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('deleteLabel', request);
}

/**
 * Deletes a review label from a project
 */
export function deleteReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('deleteReviewLabel', request);
}

/**
 * Merges two or more discussion labels into one
 */
export function mergeLabels(request: MessageTypes.EditLabelsRequestDTO): Promise<MessageTypes.LabelDTO> {
	return post('mergeLabels', request);
}

/**
 * Checks connection to a given VCS repository
 */
export function testVcsConnection(request: MessageTypes.TestConnectionRequestDTO): Promise<MessageTypes.TestConnectionResponseDTO> {
	return post('testVcsConnection', request);
}

/**
 * Checks availability of a given POP3 mailbox
 */
export function testPOP3Mailbox(request: MessageTypes.TestPOP3MailboxRequestDTO): Promise<MessageTypes.TestPOP3MailboxResponseDTO> {
	return post('testPOP3Mailbox', request);
}

/**
 * Checks if server is in read-only mode
 */
export function getReadOnlyMode(): Promise<MessageTypes.ReadOnlyModeDTO> {
	return get('getReadOnlyMode');
}

/**
 * Enables/disables the read-only mode
 */
export function setReadOnlyMode(request: MessageTypes.ReadOnlyModeDTO): Promise<MessageTypes.VoidMessage> {
	return post('setReadOnlyMode', request);
}

/**
 * Returns all roles available in Hub
 */
export function getAllRoles(): Promise<MessageTypes.AllRolesResponseDTO> {
	return get('getAllRoles');
}

/**
 * Returns users that have any access to the project and role keys associated with each user
 */
export function getUsersRoles(request: MessageTypes.UsersRolesRequestDTO): Promise<MessageTypes.UsersRolesResponseDTO> {
	return get('getUsersRoles', request);
}

/**
 * Adds a user role
 */
export function addUserRole(request: MessageTypes.AddRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('addUserRole', request);
}

/**
 * Deletes a user role (not the role itself, but the association)
 */
export function deleteUserRole(request: MessageTypes.DeleteRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
	return post('deleteUserRole', request);
}

/**
 * Searches for user in Hub by an email, and sends an invitation if not found
 */
export function inviteUser(request: MessageTypes.InviteUserRequestDTO): Promise<MessageTypes.InviteUserResponseDTO> {
	return post('inviteUser', request);
}

/**
 * Exports user-generated data - reviews, discussions, settings
 */
export function exportData(): Promise<MessageTypes.ExportDataResponseDTO> {
	return post('exportData');
}

/**
 * Returns project activity distribution over time, i.e. the number of commits per time period
 */
export function getProjectActivity(request: MessageTypes.ProjectActivityRequestDTO): Promise<MessageTypes.ProjectActivityDTO> {
	return get('getProjectActivity', request);
}

/**
 * Returns contributors distribution over time, i.e. the number of commits per time period per committer
 */
export function getContributorsDistribution(request: MessageTypes.ContributorsDistributionRequestDTO): Promise<MessageTypes.ContributorsDistributionDTO> {
	return get('getContributorsDistribution', request);
}

/**
 * Returns commits distribution in a given date range over all committers and modules
 */
export function getResponsibilityDistribution(request: MessageTypes.ResponsibilityDistributionRequestDTO): Promise<MessageTypes.ResponsibilityDistributionDTO> {
	return get('getResponsibilityDistribution', request);
}

/**
 * Returns all committers throughout the project history
 */
export function getProjectCommitters(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectCommittersDTO> {
	return get('getProjectCommitters', request);
}

/**
 * Returns project activity distribution over time, i.e. the number of commits per time period for a specified set of committers
 */
export function getUserActivity(request: MessageTypes.UserActivityRequestDTO): Promise<MessageTypes.UserActivityDTO> {
	return get('getUserActivity', request);
}

/**
 * Returns per-module activity distribution in the project
 */
export function getModulesDistribution(request: MessageTypes.ModulesDistributionRequestDTO): Promise<MessageTypes.ModulesDistributionDTO> {
	return get('getModulesDistribution', request);
}

/**
 * Returns the summary for the specified date range and set of committers: total number of commits, number of commits that aren't part of any module, total number of modules changed
 */
export function getCommitsSummary(request: MessageTypes.CommitsSummaryRequestDTO): Promise<MessageTypes.CommitsSummaryDTO> {
	return get('getCommitsSummary', request);
}

/**
 * Returns the revisions in the specified module, in the specified date range and for the specified committers
 */
export function getCommitsDetails(request: MessageTypes.CommitsDetailsRequestDTO): Promise<MessageTypes.CommitsDetailsDTO> {
	return get('getCommitsDetails', request);
}

/**
 * Returns the data required to display an animated chart of distribution of individual files in project across "edits - age" plane
 */
export function getFileHistoryChart(request: MessageTypes.FileHistoryChartRequestDTO): Promise<MessageTypes.FileHistoryChartDTO> {
	return get('getFileHistoryChart', request);
}

/**
 * Returns the list of files in a project and their content sizes required to build the interactive treemap chart
 */
export function getProjectTreeMap(request: MessageTypes.ProjectTreeMapRequestDTO): Promise<MessageTypes.ProjectTreeMapDTO> {
	return get('getProjectTreeMap', request);
}

/**
 * Returns the activity pulse for a specified project
 */
export function getProjectPulse(request: MessageTypes.ProjectPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
	return get('getProjectPulse', request);
}

/**
 * Returns the activity pulse of a given user across all projects (`allValues` time series is always empty)
 */
export function getUserPulse(request: MessageTypes.UserPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
	return get('getUserPulse', request);
}

/**
 * Returns the general review statistics in the project
 */
export function getReviewStatistics(request: MessageTypes.ReviewStatisticsRequestDTO): Promise<MessageTypes.ReviewStatisticsDTO> {
	return get('getReviewStatistics', request);
}

/**
 * Returns the number of revisions covered by reviews in the project
 */
export function getReviewCoverage(request: MessageTypes.ReviewCoverageRequestDTO): Promise<MessageTypes.ReviewCoverageDTO> {
	return get('getReviewCoverage', request);
}

/**
 * Returns the time distribution of reviews and review iterations
 */
export function getReviewTimeStatistics(request: MessageTypes.ReviewTimeStatisticsRequestDTO): Promise<MessageTypes.ReviewTimeStatisticsDTO> {
	return get('getReviewTimeStatistics', request);
}

/**
 * Returns review activity graph for the project
 */
export function getReviewersGraph(request: MessageTypes.ReviewersGraphRequestDTO): Promise<MessageTypes.ReviewersGraphDTO> {
	return get('getReviewersGraph', request);
}

/**
 * Updates user timezone
 */
export function updateUserTimezone(request: MessageTypes.UpdateUserTimezoneDTO): Promise<MessageTypes.VoidMessage> {
	return post('updateUserTimezone', request);
}

/**
 * Updates the time when the user last saw the list of his/her achievements
 */
export function updateAchievementsLastSeen(request: MessageTypes.UserActionNotificationDTO): Promise<MessageTypes.VoidMessage> {
	return post('updateAchievementsLastSeen', request);
}

/**
 * Returns the list of achievements the user has unlocked
 */
export function getUnlockedUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
	return get('getUnlockedUserAchievements', request);
}

/**
 * Returns a count of unread achievements the user has unlocked
 */
export function getUnreadUnlockedUserAchievementsCount(): Promise<MessageTypes.UserAchievementsCountDTO> {
	return get('getUnreadUnlockedUserAchievementsCount');
}

/**
 * Returns the list of all achievements with information about whether the achievement was unlocked by the user or not
 */
export function getUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
	return get('getUserAchievements', request);
}

/**
 * Returns the list of available issue trackers
 */
export function getAvailableIssueTrackerProviders(): Promise<MessageTypes.IssueTrackerProvidersListDTO> {
	return get('getAvailableIssueTrackerProviders');
}

/**
 * Returns detailed issue information
 */
export function getIssueInfo(request: MessageTypes.IssueInfoRequestDTO): Promise<MessageTypes.IssueInfoDTO> {
	return get('getIssueInfo', request);
}

/**
 * Creates an issue from the discussion in a given issue tracker
 */
export function createIssueFromDiscussion(request: MessageTypes.CreateIssueFromDiscussionRequestDTO): Promise<MessageTypes.IssueIdDTO> {
	return post('createIssueFromDiscussion', request);
}

/**
 * Creates an issue from the review in a given issue tracker
 */
export function createIssueFromReview(request: MessageTypes.CreateIssueFromReviewRequestDTO): Promise<MessageTypes.IssueIdDTO> {
	return post('createIssueFromReview', request);
}
