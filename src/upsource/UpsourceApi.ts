/**
 * This file is generated using 'yarn generate'.
 */

import BaseApi from './BaseApi';
import * as MessageTypes from './MessageTypes';

export default class UpsourceApi extends BaseApi {
	/**
	 * Accepts the end user agreement for a given user
	 */
	public acceptUserAgreement(): Promise<MessageTypes.VoidMessage> {
		return this.post('acceptUserAgreement');
	}

	/**
	 * Returns the text of the end user agreement
	 */
	public getUserAgreementText(): Promise<MessageTypes.UserAgreementTextDTO> {
		return this.get('getUserAgreementText');
	}

	/**
	 * In the case of an empty request, returns the list of all short project infos. Otherwise returns the list of project infos for a given set of project IDs. In any case only the projects the user has access to are returned.
	 */
	public getAllProjects(request: MessageTypes.ProjectIdListDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
		return this.get('getAllProjects', request);
	}

	/**
	 * Returns the list of projects  matching a given search criteria
	 */
	public findProjects(request: MessageTypes.FindProjectsRequestDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
		return this.get('findProjects', request);
	}

	/**
	 * Returns basic information about the project - name, project model, latest revision, etc.
	 */
	public getProjectInfo(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectInfoDTO> {
		return this.get('getProjectInfo', request);
	}

	/**
	 * Returns VCS repository URL(s) for a given project
	 */
	public getProjectVcsLinks(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VcsRepoListDTO> {
		return this.get('getProjectVcsLinks', request);
	}

	/**
	 * Returns README (README.md) contents from the latest revision
	 */
	public getProjectReadme(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectReadmeResponseDTO> {
		return this.get('getProjectReadme', request);
	}

	/**
	 * Returns all registered code review patterns across all projects
	 */
	public getCodeReviewPatterns(): Promise<MessageTypes.CodeReviewPatternsDTO> {
		return this.get('getCodeReviewPatterns');
	}

	/**
	 * Returns the revision descriptor for the latest revision - ID, date, commit message, authors, parent revisions, etc.
	 */
	public getHeadRevision(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.RevisionInfoDTO> {
		return this.get('getHeadRevision', request);
	}

	/**
	 * Returns the list of revisions in a given project (optionally with revision graph)
	 */
	public getRevisionsList(request: MessageTypes.RevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
		return this.get('getRevisionsList', request);
	}

	/**
	 * Returns the list of revisions that match the given search query
	 */
	public getRevisionsListFiltered(request: MessageTypes.RevisionsListFilteredRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
		return this.get('getRevisionsListFiltered', request);
	}

	/**
	 * Returns the list of revisions across all projects authored by the specified user and (optionally) matching the specified query
	 */
	public getUserRevisionsList(request: MessageTypes.UserRevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
		return this.get('getUserRevisionsList', request);
	}

	/**
	 * Returns the list of revisions since the given revision
	 */
	public getRevisionsListUpdate(request: MessageTypes.RevisionsListUpdateRequestDTO): Promise<MessageTypes.RevisionsListUpdateResponseDTO> {
		return this.get('getRevisionsListUpdate', request);
	}

	/**
	 * Returns the revision descriptor - ID, date, commit message, authors, parent revisions, etc.
	 */
	public getRevisionInfo(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionInfoDTO> {
		return this.get('getRevisionInfo', request);
	}

	/**
	 * Returns the list of changes (files that were added, removed, or modified) in a revision
	 */
	public getRevisionChanges(request: MessageTypes.RevisionChangesRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
		return this.get('getRevisionChanges', request);
	}

	/**
	 * Returns the list of branches a revision is part of
	 */
	public getRevisionBranches(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionBranchesResponseDTO> {
		return this.get('getRevisionBranches', request);
	}

	/**
	 * Returns the project structure tree starting from the given file
	 */
	public getProjectSubtree(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.ProjectItemsListDTO> {
		return this.get('getProjectSubtree', request);
	}

	/**
	 * Returns meta information about a file (is deleted, is latest revision, etc.)
	 */
	public getFileMeta(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileMetaResponseDTO> {
		return this.get('getFileMeta', request);
	}

	/**
	 * Returns the line-by-line file annotation
	 */
	public getFileAnnotation(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileAnnotationResponseDTO> {
		return this.get('getFileAnnotation', request);
	}

	/**
	 * Returns the file contributors
	 */
	public getFileContributors(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContributorsResponseDTO> {
		return this.get('getFileContributors', request);
	}

	/**
	 * Returns the authors of the given file fragment
	 */
	public getFileFragmentAuthors(request: MessageTypes.FileFragmentAuthorsRequestDTO): Promise<MessageTypes.UsersListDTO> {
		return this.get('getFileFragmentAuthors', request);
	}

	/**
	 * Returns the history (list of revision IDs and change types) of the file
	 */
	public getFileHistory(request: MessageTypes.FileHistoryRequestDTO): Promise<MessageTypes.FileHistoryResponseDTO> {
		return this.get('getFileHistory', request);
	}

	/**
	 * Returns the diff (changed lines and ranges) between the given revisions of a file
	 */
	public getFileDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
		return this.get('getFileDiff', request);
	}

	/**
	 * Returns the inline diff (changed lines and ranges, line numbers mapping) for the given file
	 */
	public getFileInlineDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
		return this.get('getFileInlineDiff', request);
	}

	/**
	 * Returns the inline diff of a file after the merge with the base branch
	 */
	public getFileMergeInlineDiff(request: MessageTypes.FileMergeInlineDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
		return this.get('getFileMergeInlineDiff', request);
	}

	/**
	 * Returns the contents of the given file
	 */
	public getFileContent(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContentResponseDTO> {
		return this.get('getFileContent', request);
	}

	/**
	 * Returns the semantic markup of the given file
	 */
	public getFilePsi(request: MessageTypes.FilePsiRequestDTO): Promise<MessageTypes.FilePsiResponseDTO> {
		return this.get('getFilePsi', request);
	}

	/**
	 * Returns the text range of the given PSI element
	 */
	public getStubNavigationRange(request: MessageTypes.StubIdDTO): Promise<MessageTypes.NavigationTargetItemDTO> {
		return this.get('getStubNavigationRange', request);
	}

	/**
	 * Returns the text representation of the given PSI element
	 */
	public getElementDescription(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.TargetDescriptionDTO> {
		return this.get('getElementDescription', request);
	}

	/**
	 * Returns the documentation (e.g. Javadoc) for the given PSI element
	 */
	public getElementDocumentation(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.ElementDocumentationDTO> {
		return this.get('getElementDocumentation', request);
	}

	/**
	 * Returns the list of usages for the given PSI element
	 */
	public findUsages(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindUsagesResponseDTO> {
		return this.get('findUsages', request);
	}

	/**
	 * Returns the usages diff for the given PSI element between two revisions
	 */
	public getUsagesDiff(request: MessageTypes.UsagesDiffRequestDTO): Promise<MessageTypes.UsagesDiffResponseDTO> {
		return this.get('getUsagesDiff', request);
	}

	/**
	 * Returns the list of inheritors and ancestors for the given PSI element
	 */
	public findHierarchy(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindHierarchyResultDTO> {
		return this.get('findHierarchy', request);
	}

	/**
	 * Returns the files matched by the search query in a given revision, review, project-wide, or service-wide
	 */
	public gotoFileByName(request: MessageTypes.GotoFileRequestDTO): Promise<MessageTypes.GotoFileResponseDTO> {
		return this.post('gotoFileByName', request);
	}

	/**
	 * Performs full-text search across all commits and files (either service-wide or project-wide)
	 */
	public textSearch(request: MessageTypes.TextSearchRequestDTO): Promise<MessageTypes.TextSearchResponseDTO> {
		return this.post('textSearch', request);
	}

	/**
	 * Performs project-wide search by branch name
	 */
	public findBranches(request: MessageTypes.FindBranchRequestDTO): Promise<MessageTypes.FindBranchResponseDTO> {
		return this.get('findBranches', request);
	}

	/**
	 * Returns the list of changes in the given branch
	 */
	public getBranchDiff(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
		return this.get('getBranchDiff', request);
	}

	/**
	 * Returns the list of changes between any two revisions
	 */
	public getRevisionsDiff(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
		return this.get('getRevisionsDiff', request);
	}

	/**
	 * Compare page
	 */
	public getCompareInfo(request: MessageTypes.CompareRequestDTO): Promise<MessageTypes.CompareInfoDTO> {
		return this.get('getCompareInfo', request);
	}

	/**
	 * Revision graph for compare page
	 */
	public getCompareGraph(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.CompareGraphDTO> {
		return this.get('getCompareGraph', request);
	}

	/**
	 * Branch page
	 */
	public getBranchInfo(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchInfoDTO> {
		return this.get('getBranchInfo', request);
	}

	/**
	 * Revision graph for branch page
	 */
	public getBranchGraph(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchGraphDTO> {
		return this.get('getBranchGraph', request);
	}

	/**
	 * Returns the list of branches in a project
	 */
	public getBranches(request: MessageTypes.BranchesRequestDTO): Promise<MessageTypes.BranchListDTO> {
		return this.get('getBranches', request);
	}

	/**
	 * Finds commit(s) with the given commit hash
	 */
	public findCommits(request: MessageTypes.FindCommitsRequestDTO): Promise<MessageTypes.FindCommitsResponseDTO> {
		return this.get('findCommits', request);
	}

	/**
	 * Returns the discussions in the project, matching given query
	 */
	public getProjectDiscussions(request: MessageTypes.DiscussionsInProjectRequestDTO): Promise<MessageTypes.DiscussionsInProjectDTO> {
		return this.get('getProjectDiscussions', request);
	}

	/**
	 * Returns the discussions in the given file
	 */
	public getFileDiscussions(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.DiscussionsInFileDTO> {
		return this.get('getFileDiscussions', request);
	}

	/**
	 * Returns the discussions in the given revision
	 */
	public getInlineDiscussionsInRevision(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
		return this.get('getInlineDiscussionsInRevision', request);
	}

	/**
	 * Creates a new discussion
	 */
	public createDiscussion(request: MessageTypes.CreateDiscussionRequestDTO): Promise<MessageTypes.DiscussionInFileDTO> {
		return this.post('createDiscussion', request);
	}

	/**
	 * Updates a discussion
	 */
	public resolveDiscussion(request: MessageTypes.ResolveDiscussionRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('resolveDiscussion', request);
	}

	/**
	 * Checks if current user can resolve the given discussion
	 */
	public getCurrentUserCanResolveDiscussion(request: MessageTypes.DiscussionIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.get('getCurrentUserCanResolveDiscussion', request);
	}

	/**
	 * Adds a label to a discussion
	 */
	public addDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
		return this.post('addDiscussionLabel', request);
	}

	/**
	 * Adds a label to a review
	 */
	public addReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
		return this.post('addReviewLabel', request);
	}

	/**
	 * Removes a label from a discussion
	 */
	public removeDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('removeDiscussionLabel', request);
	}

	/**
	 * Removes a label from a review
	 */
	public removeReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
		return this.post('removeReviewLabel', request);
	}

	/**
	 * Stars a discussion
	 */
	public starDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('starDiscussion', request);
	}

	/**
	 * Toggles the read/unread state of a discussion
	 */
	public readDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('readDiscussion', request);
	}

	/**
	 * Adds a comment to the discussion
	 */
	public addComment(request: MessageTypes.AddCommentRequestDTO): Promise<MessageTypes.CommentDTO> {
		return this.post('addComment', request);
	}

	/**
	 * Updates the comment
	 */
	public updateComment(request: MessageTypes.UpdateCommentRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
		return this.post('updateComment', request);
	}

	/**
	 * Removes the comment
	 */
	public removeComment(request: MessageTypes.RemoveCommentRequestDTO): Promise<MessageTypes.RemoveCommentResponseDTO> {
		return this.post('removeComment', request);
	}

	/**
	 * Updates the task list embedded in a comment
	 */
	public updateTaskList(request: MessageTypes.UpdateTaskListRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
		return this.post('updateTaskList', request);
	}

	/**
	 * Adds or removes a reaction to a specified target
	 */
	public toggleReaction(request: MessageTypes.ToggleReactionRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('toggleReaction', request);
	}

	/**
	 * Returns the news feed
	 */
	public getFeed(request: MessageTypes.FeedRequestDTO): Promise<MessageTypes.FeedDTO> {
		return this.get('getFeed', request);
	}

	/**
	 * Returns the discussions in the given revision
	 */
	public getRevisionDiscussions(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInRevisionDTO> {
		return this.get('getRevisionDiscussions', request);
	}

	/**
	 * Returns short review information for a set of revisions
	 */
	public getRevisionReviewInfo(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionReviewInfoListDTO> {
		return this.get('getRevisionReviewInfo', request);
	}

	/**
	 * Returns review suggestions for a set of revisions
	 */
	public getSuggestedReviewsForRevisions(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.SuggestedReviewListDTO> {
		return this.get('getSuggestedReviewsForRevisions', request);
	}

	/**
	 * Returns review suggestion for the uncommitted revision
	 */
	public getSuggestedReviewForGhosts(request: MessageTypes.UncommittedRevisionDTO): Promise<MessageTypes.ReviewSuggestDTO> {
		return this.get('getSuggestedReviewForGhosts', request);
	}

	/**
	 * Returns discussion counters for a set of revisions
	 */
	public getRevisionDiscussionCounters(request: MessageTypes.RevisionDiscussionCountersRequestDTO): Promise<MessageTypes.RevisionDiscussionCountersListDTO> {
		return this.get('getRevisionDiscussionCounters', request);
	}

	/**
	 * Returns build status for revisions
	 */
	public getRevisionBuildStatus(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionBuildStatusListDTO> {
		return this.get('getRevisionBuildStatus', request);
	}

	/**
	 * Returns the code ownership summary for given revisions
	 */
	public getRevisionsOwnershipSummary(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsOwnershipSummaryDTO> {
		return this.get('getRevisionsOwnershipSummary', request);
	}

	/**
	 * Returns the diff of external inspections compared to the previous run
	 */
	public getRevisionsExternalInspectionsDiff(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsExternalInspectionsDiffResponseDTO> {
		return this.get('getRevisionsExternalInspectionsDiff', request);
	}

	/**
	 * Returns the suggested users to be mentioned in a comment
	 */
	public getUsersForMention(request: MessageTypes.UsersForMentionRequestDTO): Promise<MessageTypes.UsersListDTO> {
		return this.get('getUsersForMention', request);
	}

	/**
	 * Returns the suggested reviewers for a given review
	 */
	public getUsersForReview(request: MessageTypes.UsersForReviewRequestDTO): Promise<MessageTypes.UsersForReviewDTO> {
		return this.get('getUsersForReview', request);
	}

	/**
	 * Returns the list of non-empty user groups relevant to a given project
	 */
	public getProjectUserGroups(request: MessageTypes.ProjectUserGroupsRequestDTO): Promise<MessageTypes.UserGroupsListDTO> {
		return this.get('getProjectUserGroups', request);
	}

	/**
	 * Returns the list of user groups by given IDs
	 */
	public getUserGroupsByIds(request: MessageTypes.UserGroupsIdsListDTO): Promise<MessageTypes.UserGroupsListDTO> {
		return this.get('getUserGroupsByIds', request);
	}

	/**
	 * Returns the list of users matching a given search criteria
	 */
	public findUsers(request: MessageTypes.FindUsersRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
		return this.get('findUsers', request);
	}

	/**
	 * Returns the list of discussion labels
	 */
	public getLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
		return this.get('getLabels', request);
	}

	/**
	 * Returns the list of review labels
	 */
	public getReviewLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
		return this.get('getReviewLabels', request);
	}

	/**
	 * Returns the list of reviews
	 */
	public getReviews(request: MessageTypes.ReviewsRequestDTO): Promise<MessageTypes.ReviewListDTO> {
		return this.get('getReviews', request);
	}

	/**
	 * Creates a review
	 */
	public createReview(request: MessageTypes.CreateReviewRequestDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
		return this.post('createReview', request);
	}

	/**
	 * Closes a review
	 */
	public closeReview(request: MessageTypes.CloseReviewRequestDTO): Promise<MessageTypes.CloseReviewResponseDTO> {
		return this.post('closeReview', request);
	}

	/**
	 * Renames a review
	 */
	public renameReview(request: MessageTypes.RenameReviewRequestDTO): Promise<MessageTypes.RenameReviewResponseDTO> {
		return this.post('renameReview', request);
	}

	/**
	 * Sets review description
	 */
	public editReviewDescription(request: MessageTypes.EditReviewDescriptionRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('editReviewDescription', request);
	}

	/**
	 * Returns review details
	 */
	public getReviewDetails(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
		return this.get('getReviewDetails', request);
	}

	/**
	 * Returns the code ownership summary for a given review
	 */
	public getReviewOwnershipSummary(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewOwnershipSummaryDTO> {
		return this.get('getReviewOwnershipSummary', request);
	}

	/**
	 * Returns participants' progress in a given review
	 */
	public getReviewProgress(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewProgressDTO> {
		return this.get('getReviewProgress', request);
	}

	/**
	 * Returns the diff of inspections between two revisions
	 */
	public getReviewInspectionsDiff(request: MessageTypes.ReviewInspectionsDiffRequestDTO): Promise<MessageTypes.InspectionsDiffDTO> {
		return this.get('getReviewInspectionsDiff', request);
	}

	/**
	 * Attaches a revision to a review
	 */
	public addRevisionToReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('addRevisionToReview', request);
	}

	/**
	 * Initiates branch tracking for a given review
	 */
	public startBranchTracking(request: MessageTypes.StartBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('startBranchTracking', request);
	}

	/**
	 * Stops branch tracking for a given review
	 */
	public stopBranchTracking(request: MessageTypes.StopBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('stopBranchTracking', request);
	}

	/**
	 * Rebase the review to a single squashed revision
	 */
	public squashReviewRevisions(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('squashReviewRevisions', request);
	}

	/**
	 * Removes a revision from a review
	 */
	public removeRevisionFromReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('removeRevisionFromReview', request);
	}

	/**
	 * Returns the list of revisions in a review
	 */
	public getRevisionsInReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.RevisionsInReviewResponseDTO> {
		return this.get('getRevisionsInReview', request);
	}

	/**
	 * Returns the list of suggested revisions for a particular review
	 */
	public getSuggestedRevisionsForReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.SuggestedRevisionListDTO> {
		return this.get('getSuggestedRevisionsForReview', request);
	}

	/**
	 * Adds a participant (reviewer or watcher) to a review
	 */
	public addParticipantToReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('addParticipantToReview', request);
	}

	/**
	 * Adds a group of participants (reviewers or watchers) to a review
	 */
	public addGroupToReview(request: MessageTypes.AddGroupToReviewRequestDTO): Promise<MessageTypes.AddGroupToReviewResponseDTO> {
		return this.post('addGroupToReview', request);
	}

	/**
	 * Updates the participant's state
	 */
	public updateParticipantInReview(request: MessageTypes.UpdateParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('updateParticipantInReview', request);
	}

	/**
	 * Removes a participant from a review
	 */
	public removeParticipantFromReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('removeParticipantFromReview', request);
	}

	/**
	 * Mutes activities taking place in a certain review or cancels muting that was previously set
	 */
	public toggleReviewMuted(request: MessageTypes.ToggleReviewMutedRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('toggleReviewMuted', request);
	}

	/**
	 * Sets/clears review due date
	 */
	public setReviewDeadline(request: MessageTypes.ReviewDeadlineRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setReviewDeadline', request);
	}

	/**
	 * Merge review: sets target branch
	 */
	public setReviewTargetBranch(request: MessageTypes.ReviewTargetBranchDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setReviewTargetBranch', request);
	}

	/**
	 * Returns the list of changes (sum of all revisions) in a review
	 */
	public getReviewSummaryChanges(request: MessageTypes.ReviewSummaryChangesRequestDTO): Promise<MessageTypes.ReviewSummaryChangesResponseDTO> {
		return this.get('getReviewSummaryChanges', request);
	}

	/**
	 * Returns the diff (sum of all revisions) of a file in review
	 */
	public getFileInReviewSummaryInlineChanges(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
		return this.get('getFileInReviewSummaryInlineChanges', request);
	}

	/**
	 * Returns the diff (sum of all revisions) of a file in review
	 */
	public getFileInReviewSummaryDiff(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
		return this.get('getFileInReviewSummaryDiff', request);
	}

	/**
	 * Track file read status
	 */
	public setFileInReviewReadStatus(request: MessageTypes.FileInReviewReadStatusRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setFileInReviewReadStatus', request);
	}

	/**
	 * Returns the review discussions
	 */
	public getReviewSummaryDiscussions(request: MessageTypes.ReviewSummaryDiscussionsRequestDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
		return this.get('getReviewSummaryDiscussions', request);
	}

	/**
	 * Removes the review
	 */
	public removeReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('removeReview', request);
	}

	/**
	 * Returns matching revisions for stacktrace
	 */
	public getMatchingRevisionsForStacktrace(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.MatchingRevisionsResponseDTO> {
		return this.get('getMatchingRevisionsForStacktrace', request);
	}

	/**
	 * Returns full paths and vcs commit ids for lines of stacktrace in context of revision
	 */
	public getStacktraceInContextOfRevision(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.StacktracePositionsDTO> {
		return this.get('getStacktraceInContextOfRevision', request);
	}

	/**
	 * Returns the user info for a currently logged-in user
	 */
	public getCurrentUser(): Promise<MessageTypes.CurrentUserResponseDTO> {
		return this.get('getCurrentUser');
	}

	/**
	 * Checks if current user can close given review
	 */
	public getCurrentUserCanCloseReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.get('getCurrentUserCanCloseReview', request);
	}

	/**
	 * Checks if current user can delete given review
	 */
	public getCurrentUserCanDeleteReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.get('getCurrentUserCanDeleteReview', request);
	}

	/**
	 * Returns user info for given users
	 */
	public getUserInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
		return this.get('getUserInfo', request);
	}

	/**
	 * Returns presence info for given users
	 */
	public getUsersPresenceInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UsersPresenceInfoResponseDTO> {
		return this.get('getUsersPresenceInfo', request);
	}

	/**
	 * Maps a VCS username/email to a Hub account
	 */
	public bindVcsUsername(request: MessageTypes.BindVcsUsernameRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('bindVcsUsername', request);
	}

	/**
	 * Returns the list of projects the specified user contributed to
	 */
	public getUserProjects(request: MessageTypes.UserProjectsRequestDTO): Promise<MessageTypes.UserProjectsResponseDTO> {
		return this.get('getUserProjects', request);
	}

	/**
	 * Sets or clears a user absence
	 */
	public setUserAbsence(request: MessageTypes.UserAbsenceRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setUserAbsence', request);
	}

	/**
	 * Returns the value of a user setting by name
	 */
	public getUserSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
		return this.get('getUserSetting', request);
	}

	/**
	 * Updates the value of a user setting by name
	 */
	public setUserSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setUserSetting', request);
	}

	/**
	 * Returns the value of a cluster-wide setting by name
	 */
	public getClusterSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
		return this.get('getClusterSetting', request);
	}

	/**
	 * Updates the value of a cluster-wide setting by name
	 */
	public setClusterSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setClusterSetting', request);
	}

	/**
	 * Sets the server motto
	 */
	public setMotto(request: MessageTypes.SetMottoRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setMotto', request);
	}

	/**
	 * Returns the value of a project setting by name
	 */
	public getProjectSetting(request: MessageTypes.GetProjectSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
		return this.get('getProjectSetting', request);
	}

	/**
	 * Updates the value of a project setting by name
	 */
	public setProjectSetting(request: MessageTypes.SetProjectSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setProjectSetting', request);
	}

	/**
	 * Creates a project
	 */
	public createProject(request: MessageTypes.CreateProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('createProject', request);
	}

	/**
	 * Loads project settings
	 */
	public loadProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectSettingsDTO> {
		return this.post('loadProject', request);
	}

	/**
	 * Updates project settings
	 */
	public editProject(request: MessageTypes.EditProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('editProject', request);
	}

	/**
	 * Deletes a project
	 */
	public deleteProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('deleteProject', request);
	}

	/**
	 * Completely reset a project
	 */
	public resetProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('resetProject', request);
	}

	/**
	 * Loads project settings
	 */
	public getProjectConfigurationParameters(): Promise<MessageTypes.ProjectConfigurationResponseDTO> {
		return this.get('getProjectConfigurationParameters');
	}

	/**
	 * Loads VCS Hosting services
	 */
	public getVcsHostingServices(request: MessageTypes.VcsHostingRequestDTO): Promise<MessageTypes.VcsHostingResponseDTO> {
		return this.get('getVcsHostingServices', request);
	}

	/**
	 * Creates/updates a discussion label in a project
	 */
	public createOrEditLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
		return this.post('createOrEditLabel', request);
	}

	/**
	 * Creates/updates a review label in a project
	 */
	public createOrEditReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
		return this.post('createOrEditReviewLabel', request);
	}

	/**
	 * Hides predefined discussion labels in a project
	 */
	public hidePredefinedLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('hidePredefinedLabels', request);
	}

	/**
	 * Hides predefined review labels in a project
	 */
	public hidePredefinedReviewLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('hidePredefinedReviewLabels', request);
	}

	/**
	 * Deletes a discussion label from a project
	 */
	public deleteLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('deleteLabel', request);
	}

	/**
	 * Deletes a review label from a project
	 */
	public deleteReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('deleteReviewLabel', request);
	}

	/**
	 * Merges two or more discussion labels into one
	 */
	public mergeLabels(request: MessageTypes.EditLabelsRequestDTO): Promise<MessageTypes.LabelDTO> {
		return this.post('mergeLabels', request);
	}

	/**
	 * Checks connection to a given VCS repository
	 */
	public testVcsConnection(request: MessageTypes.TestConnectionRequestDTO): Promise<MessageTypes.TestConnectionResponseDTO> {
		return this.post('testVcsConnection', request);
	}

	/**
	 * Checks availability of a given POP3 mailbox
	 */
	public testPOP3Mailbox(request: MessageTypes.TestPOP3MailboxRequestDTO): Promise<MessageTypes.TestPOP3MailboxResponseDTO> {
		return this.post('testPOP3Mailbox', request);
	}

	/**
	 * Checks if server is in read-only mode
	 */
	public getReadOnlyMode(): Promise<MessageTypes.ReadOnlyModeDTO> {
		return this.get('getReadOnlyMode');
	}

	/**
	 * Enables/disables the read-only mode
	 */
	public setReadOnlyMode(request: MessageTypes.ReadOnlyModeDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('setReadOnlyMode', request);
	}

	/**
	 * Returns all roles available in Hub
	 */
	public getAllRoles(): Promise<MessageTypes.AllRolesResponseDTO> {
		return this.get('getAllRoles');
	}

	/**
	 * Returns users that have any access to the project and role keys associated with each user
	 */
	public getUsersRoles(request: MessageTypes.UsersRolesRequestDTO): Promise<MessageTypes.UsersRolesResponseDTO> {
		return this.get('getUsersRoles', request);
	}

	/**
	 * Adds a user role
	 */
	public addUserRole(request: MessageTypes.AddRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('addUserRole', request);
	}

	/**
	 * Deletes a user role (not the role itself, but the association)
	 */
	public deleteUserRole(request: MessageTypes.DeleteRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('deleteUserRole', request);
	}

	/**
	 * Searches for user in Hub by an email, and sends an invitation if not found
	 */
	public inviteUser(request: MessageTypes.InviteUserRequestDTO): Promise<MessageTypes.InviteUserResponseDTO> {
		return this.post('inviteUser', request);
	}

	/**
	 * Exports user-generated data - reviews, discussions, settings
	 */
	public exportData(): Promise<MessageTypes.ExportDataResponseDTO> {
		return this.post('exportData');
	}

	/**
	 * Returns project activity distribution over time, i.e. the number of commits per time period
	 */
	public getProjectActivity(request: MessageTypes.ProjectActivityRequestDTO): Promise<MessageTypes.ProjectActivityDTO> {
		return this.get('getProjectActivity', request);
	}

	/**
	 * Returns contributors distribution over time, i.e. the number of commits per time period per committer
	 */
	public getContributorsDistribution(request: MessageTypes.ContributorsDistributionRequestDTO): Promise<MessageTypes.ContributorsDistributionDTO> {
		return this.get('getContributorsDistribution', request);
	}

	/**
	 * Returns commits distribution in a given date range over all committers and modules
	 */
	public getResponsibilityDistribution(request: MessageTypes.ResponsibilityDistributionRequestDTO): Promise<MessageTypes.ResponsibilityDistributionDTO> {
		return this.get('getResponsibilityDistribution', request);
	}

	/**
	 * Returns all committers throughout the project history
	 */
	public getProjectCommitters(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectCommittersDTO> {
		return this.get('getProjectCommitters', request);
	}

	/**
	 * Returns project activity distribution over time, i.e. the number of commits per time period for a specified set of committers
	 */
	public getUserActivity(request: MessageTypes.UserActivityRequestDTO): Promise<MessageTypes.UserActivityDTO> {
		return this.get('getUserActivity', request);
	}

	/**
	 * Returns per-module activity distribution in the project
	 */
	public getModulesDistribution(request: MessageTypes.ModulesDistributionRequestDTO): Promise<MessageTypes.ModulesDistributionDTO> {
		return this.get('getModulesDistribution', request);
	}

	/**
	 * Returns the summary for the specified date range and set of committers: total number of commits, number of commits that aren't part of any module, total number of modules changed
	 */
	public getCommitsSummary(request: MessageTypes.CommitsSummaryRequestDTO): Promise<MessageTypes.CommitsSummaryDTO> {
		return this.get('getCommitsSummary', request);
	}

	/**
	 * Returns the revisions in the specified module, in the specified date range and for the specified committers
	 */
	public getCommitsDetails(request: MessageTypes.CommitsDetailsRequestDTO): Promise<MessageTypes.CommitsDetailsDTO> {
		return this.get('getCommitsDetails', request);
	}

	/**
	 * Returns the data required to display an animated chart of distribution of individual files in project across "edits - age" plane
	 */
	public getFileHistoryChart(request: MessageTypes.FileHistoryChartRequestDTO): Promise<MessageTypes.FileHistoryChartDTO> {
		return this.get('getFileHistoryChart', request);
	}

	/**
	 * Returns the list of files in a project and their content sizes required to build the interactive treemap chart
	 */
	public getProjectTreeMap(request: MessageTypes.ProjectTreeMapRequestDTO): Promise<MessageTypes.ProjectTreeMapDTO> {
		return this.get('getProjectTreeMap', request);
	}

	/**
	 * Returns the activity pulse for a specified project
	 */
	public getProjectPulse(request: MessageTypes.ProjectPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
		return this.get('getProjectPulse', request);
	}

	/**
	 * Returns the activity pulse of a given user across all projects (`allValues` time series is always empty)
	 */
	public getUserPulse(request: MessageTypes.UserPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
		return this.get('getUserPulse', request);
	}

	/**
	 * Returns the general review statistics in the project
	 */
	public getReviewStatistics(request: MessageTypes.ReviewStatisticsRequestDTO): Promise<MessageTypes.ReviewStatisticsDTO> {
		return this.get('getReviewStatistics', request);
	}

	/**
	 * Returns the number of revisions covered by reviews in the project
	 */
	public getReviewCoverage(request: MessageTypes.ReviewCoverageRequestDTO): Promise<MessageTypes.ReviewCoverageDTO> {
		return this.get('getReviewCoverage', request);
	}

	/**
	 * Returns the time distribution of reviews and review iterations
	 */
	public getReviewTimeStatistics(request: MessageTypes.ReviewTimeStatisticsRequestDTO): Promise<MessageTypes.ReviewTimeStatisticsDTO> {
		return this.get('getReviewTimeStatistics', request);
	}

	/**
	 * Returns review activity graph for the project
	 */
	public getReviewersGraph(request: MessageTypes.ReviewersGraphRequestDTO): Promise<MessageTypes.ReviewersGraphDTO> {
		return this.get('getReviewersGraph', request);
	}

	/**
	 * Updates user timezone
	 */
	public updateUserTimezone(request: MessageTypes.UpdateUserTimezoneDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('updateUserTimezone', request);
	}

	/**
	 * Updates the time when the user last saw the list of his/her achievements
	 */
	public updateAchievementsLastSeen(request: MessageTypes.UserActionNotificationDTO): Promise<MessageTypes.VoidMessage> {
		return this.post('updateAchievementsLastSeen', request);
	}

	/**
	 * Returns the list of achievements the user has unlocked
	 */
	public getUnlockedUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
		return this.get('getUnlockedUserAchievements', request);
	}

	/**
	 * Returns a count of unread achievements the user has unlocked
	 */
	public getUnreadUnlockedUserAchievementsCount(): Promise<MessageTypes.UserAchievementsCountDTO> {
		return this.get('getUnreadUnlockedUserAchievementsCount');
	}

	/**
	 * Returns the list of all achievements with information about whether the achievement was unlocked by the user or not
	 */
	public getUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
		return this.get('getUserAchievements', request);
	}

	/**
	 * Returns the list of available issue trackers
	 */
	public getAvailableIssueTrackerProviders(): Promise<MessageTypes.IssueTrackerProvidersListDTO> {
		return this.get('getAvailableIssueTrackerProviders');
	}

	/**
	 * Returns detailed issue information
	 */
	public getIssueInfo(request: MessageTypes.IssueInfoRequestDTO): Promise<MessageTypes.IssueInfoDTO> {
		return this.get('getIssueInfo', request);
	}

	/**
	 * Creates an issue from the discussion in a given issue tracker
	 */
	public createIssueFromDiscussion(request: MessageTypes.CreateIssueFromDiscussionRequestDTO): Promise<MessageTypes.IssueIdDTO> {
		return this.post('createIssueFromDiscussion', request);
	}

	/**
	 * Creates an issue from the review in a given issue tracker
	 */
	public createIssueFromReview(request: MessageTypes.CreateIssueFromReviewRequestDTO): Promise<MessageTypes.IssueIdDTO> {
		return this.post('createIssueFromReview', request);
	}
}
