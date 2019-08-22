/**
 * Describes analyzer problem severity
 */
export enum AnalyzerProblemSeverityEnum {
	Info = 1,
	Warning = 2,
	Error = 3,
}

/**
 * Describes a GitHub / GitLab configuration problem
 */
export enum AppConfigurationProblemEnum {
	IncompatibleHub = 1,
	MissingAuthModule = 2,
}

/**
 * Describes build status
 */
export enum BuildStatusEnum {
	Success = 1,
	Failed = 2,
	InProgress = 3,
}

/**
 * Describes "capabilities" of a PSI element
 */
export enum CapabilityFlagsEnum {
	canGotoDeclaration = 1,
	canFindUsages = 2,
	canViewHierarchy = 4,
	canHaveDocumentation = 8,
	isDeclaration = 16,
	isWriteAccess = 32,
}

/**
 * Describes merge conflict type
 */
export enum ConflictTypeEnum {
	NO_CONFLICT = 1,
	CAN_BE_RESOLVED = 2,
	CAN_NOT_BE_RESOLVED = 3,
}

/**
 * Describes file-level diff type
 */
export enum DiffTypeEnum {
	Added = 1,
	Removed = 2,
	Modified = 3,
	Commented = 4,
}

/**
 * Describes status of an email address
 */
export enum EmailStatusEnum {
	OK = 1,
	NotVerified = 2,
	NotSpecified = 3,
	HardBounce = 4,
}

/**
 * Describes feed type
 */
export enum FeedTypeEnum {
	Feed = 1,
	Review = 2,
}

/**
 * Describes PSI inspections level
 */
export enum FileWarningLevelEnum {
	none = 1,
	ok = 2,
	warning = 3,
	error = 4,
}

/**
 * Describes the properties of a gutter marker
 */
export enum GutterMarkEnum {
	hasSuperElements = 1,
	hasDerivedElements = 2,
}

/**
 * Describes severity of an inspection result
 */
export enum InspectionSeverityEnum {
	information = 1,
	weak_warning = 2,
	warning = 3,
	error = 4,
}

export enum IssueRequiredFieldTypeEnum {
	Text = 1,
	Date = 2,
	Value = 3,
	Array = 4,
}

/**
 * Describes file ownership
 */
export enum OwnershipSummaryEnum {
	OK = 1,
	ONE_MAJOR = 2,
	ALL_MINOR = 3,
}

/**
 * Describes participant status
 */
export enum ParticipantStateEnum {
	Unread = 1,
	Read = 2,
	Accepted = 3,
	Rejected = 4,
}

/**
 * Describes project status
 */
export enum ProjectStateEnum {
	NotStarted = 1,
	Initializing = 2,
	Success = 3,
	Failure = 4,
}

export enum QueryAssistSearchContextEnum {
	Revisions = 1,
	Reviews = 2,
	Branches = 4,
	Discussions = 8,
}

/**
 * Describes read status of a feed item
 */
export enum ReadEnum {
	Read = 1,
	Unread = 2,
	ManuallyUnread = 3,
}

export enum ReviewCoverageStateEnum {
	CLOSED = 1,
	OPEN = 2,
	ALL = 3,
}

/**
 * Describes review feed sorting criteria
 */
export enum ReviewFeedSortEnum {
	Natural = 1,
	LastUpdated = 2,
}

/**
 * Describes review state
 */
export enum ReviewStateEnum {
	Open = 1,
	Closed = 2,
}

export enum RevisionReachabilityEnum {
	/** Revision is reachable via heads */
	Reachable = 1,
	/** Unknown revision */
	Unknown = 2,
	/** Revision used to be reachable and can become 'Unknown' shortly */
	NotReachable = 3,
}

/**
 * Describes revision status
 */
export enum RevisionStateEnum {
	None = 1,
	Found = 2,
	Imported = 3,
}

/**
 * Describes roles in a review
 */
export enum RoleInReviewEnum {
	Author = 1,
	Reviewer = 2,
	Watcher = 3,
}

/**
 * Describes status of a GitHub/GitLab synchronisation
 */
export enum SyncResultEnum {
	Ok = 1,
	ProjectNotSynchronized = 2,
	CommentNotSynchronized = 3,
	ReviewNotSynchronized = 4,
	AccessTokenNotProvided = 5,
	GithubMisconfiguration = 6,
	UnsupportedMethod = 7,
	InternalError = 8,
	RateLimitExceeded = 9,
	IoError = 10,
}

/**
 * Describes status of a remote connection
 */
export enum TestConnectionStatusEnum {
	Success = 1,
	Failure = 2,
	Timeout = 3,
}

/**
 * Describes connection status
 */
export enum TestPOP3MailboxStatusEnum {
	OK = 1,
	LoginFailed = 2,
	ConnectionFailed = 3,
}

export enum TimeUnitEnum {
	HOUR = 1,
	DAY = 2,
	WEEK = 3,
	MONTH = 4,
	QUARTER = 5,
	YEAR = 6,
}

export interface AchievementDTO {
	/** Achievement ID */
	id: string;
	/** Achievement title */
	name: string;
	/** Short description of the achievement */
	shortDescription: string;
	/** Longer description of the achievement */
	description?: string;
	/** Unix timestamp of the unlocking event */
	date?: number;
	/** Whether the user saw a notification about the unlocking */
	isUnread?: boolean;
	/** Whether the achievement is unlocked by the user */
	isUnlocked?: boolean;
}

export interface AchievementsListDTO {
	items: Array<AchievementDTO>;
}

export interface AddCommentRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Discussion ID */
	discussionId: string;
	/** Text of the comment being added */
	text: string;
	/** An ID of the comment you are replying to */
	parentId?: string;
	/** Currently not in use */
	markupType?: string;
}

export interface AddGroupToReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** ID of a user group */
	groupId: string;
	/** Role of users getting assigned. See RoleInReviewEnum parameters */
	role: RoleInReviewEnum;
}

export interface AddGroupToReviewResponseDTO {
	/** How many users from the specified group were added */
	addedUsersCount: number;
}

export interface AddRoleRequestDTO {
	/** ID of the Upsource project */
	projectId: string;
	/** ID of the Upsource user */
	userId: string;
	/** Role key */
	roleKey: string;
}

export interface AllRolesResponseDTO {
	/** See RoleDetailsDTO parameters */
	roleDetails: Array<RoleDetailsDTO>;
}

export interface AnalyzerStats {
	/** Unix timestamp of the earliest commit */
	minCommitTime: number;
	/** Unix timestamp of the latest commit */
	maxCommitTime: number;
	/** Total number of commits */
	totalCommits: number;
	/** Unix timestamp of the earliest indexed commit */
	minIndexedCommitTime: number;
	/** Unix timestamp of the latest indexed commit */
	maxIndexedCommitTime: number;
	/** Total number of indexed commits */
	totalIndexedCommits: number;
	/** Whether project model is known */
	isProjectModelKnown: boolean;
}

export interface AnchorDTO {
	/** Text range associated with an anchor */
	range?: RangeDTO;
	/** File associated with an anchor */
	fileId?: string;
	/** VCS revision ID */
	revisionId?: string;
	/** Whether a comment was left in the inline diff */
	inlineInRevision?: string;
}

export interface BindVcsUsernameRequestDTO {
	/** User ID to register as an alias of the currently logged-in user */
	userId: string;
}

export interface BranchDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Branch name */
	name: string;
	/** See RevisionInfoDTO parameters */
	lastRevision: RevisionInfoDTO;
	/** Whether the branch is a default one */
	isDefault: boolean;
	/** See BranchStatsDTO parameters */
	stats: BranchStatsDTO;
	/** Whether the branch is from a hosted repository */
	isHosted: boolean;
	/** ID of the branch review, if one exists */
	reviewId?: ReviewIdDTO;
}

export interface BranchGraphDTO {
	/** See RevisionInfoDTO parameters */
	revisions: Array<RevisionInfoDTO>;
	/** See RevisionListGraphDTO parameters */
	graph: RevisionListGraphDTO;
}

export interface BranchInfoDTO {
	/** Number of commits associated with the branch */
	commitsCount: number;
	/** Number of files affected by the branch commits */
	filesCount: number;
	/** Revision where the branching took place */
	branchingRevision: string;
	/** Latest revision in the branch. See RevisionInfoDTO parameters */
	headRevision: RevisionInfoDTO;
	/** See ReviewDescriptorDTO parameters */
	reviewInfo?: ReviewDescriptorDTO;
	/** A branch review can be created. See CanCreateBranchReviewDTO parameters. */
	canCreateReview: CanCreateBranchReviewDTO;
	/** See BranchStatsDTO parameters */
	stats: BranchStatsDTO;
	/** See BranchMergeInfoDTO parameters */
	mergeInfo: BranchMergeInfoDTO;
	/** Whether the branch is a pull request */
	isPullRequest: boolean;
}

export interface BranchListDTO {
	/** See BranchDTO parameters */
	branch: Array<BranchDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
	/** How many branches */
	totalBranches: number;
	/** Name of the default branch */
	defaultBranch?: string;
	/** Whether the project has the default branch */
	isDefaultBranchExists?: boolean;
}

export interface BranchMergeInfoDTO {
	/** The list of files that are changed in both: given branch and base branch */
	mergeFiles: Array<string>;
}

export interface BranchRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Branch name */
	branch: string;
}

export interface BranchStatsDTO {
	/** The branch from which the given branch originated; null if the given branch is a default one or the only branch in the repository */
	parentBranch?: string;
	/** How many commits ahead of the parent branch; 0 for a default branch */
	commitsAhead: number;
	/** How many commits behind the parent branch; 0 for a default branch */
	commitsBehind: number;
}

export interface BranchesRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Search query */
	query: string;
	/** Number of branches to return */
	limit: number;
	/** Sort by: last updated ("updated", default), branch name ("name") */
	sortBy?: string;
}

export interface BranchingRevisionSuggestion {
	/** Revision ID to suggest */
	revisionId: string;
	/** The number of revisions to the left locator */
	pathToLeftSize: number;
	/** The number of revisions to the right locator */
	pathToRightSize: number;
}

export interface CanCreateBranchReviewDTO {
	/** A branch review can be created */
	isAllowed: boolean;
	/** A message explaining the reason why a review can't be created */
	message?: string;
}

export interface CheckCanCreateProjectRequestDTO {
	/** Hub project ID */
	hubProjectId: string;
}

export interface CheckCanCreateProjectResponseDTO {
	/** Whether the user has the right to create projects */
	isAllowed: boolean;
	/** Optional text message */
	message?: string;
}

export interface CloseReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Pass 'true' to close a review, 'false' to reopen a closed review */
	isFlagged: boolean;
}

export interface CloseReviewResponseDTO {
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface CodeInspectionsDTO {
	/** See InspectionCodeMarkupItemDTO parameters */
	inspections: Array<InspectionCodeMarkupItemDTO>;
	/** See FileWarningLevelEnum parameters */
	fileLevel: FileWarningLevelEnum;
}

export interface CodeReviewPattern {
	/** Project ID in Upsource */
	projectId: string;
	/** Code review ID pattern */
	pattern: string;
}

export interface CodeReviewPatternsDTO {
	/** See CodeReviewPattern */
	patterns: Array<CodeReviewPattern>;
}

export interface CommentDTO {
	/** ID of the discussion */
	discussionId: string;
	/** ID of the comment */
	commentId: string;
	/** Text of the comment */
	text: string;
	/** User ID of the comment author */
	authorId: string;
	/** Unix timestamp of the comment */
	date: number;
	/** ID of the parent comment */
	parentId?: string;
	/** Whether the comment can be edited */
	isEditable: boolean;
	/** Currently not in use */
	markupType?: string;
	/** Whether the discussion is in sync with GitHub */
	isSynchronized: boolean;
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
	/** Whether the comment has been read by the requester */
	isRead: boolean;
	/** Reactions added to the comment */
	reactions: Array<ReactionDTO>;
}

export interface CommentsStatisticsDTO {
	/** Number of review comments */
	reviewComments: number;
	/** Total number of comments */
	totalComments: number;
	/** See UserValue parameters */
	totalCounts: Array<UserValue>;
	/** See UserValue parameters */
	unlabeledCounts: Array<UserValue>;
	/** See LabelStats parameters */
	statsPerLabel: Array<LabelStats>;
}

export interface CommitInfo {
	/** Revision ID */
	revisionId: string;
	/** Commit message */
	description: string;
	/** Unix timestamp of commit time */
	time: number;
	/** Short revision ID */
	shortRevisionId: string;
}

export interface CommitsDetailsDTO {
	/** See CommitInfo parameters */
	commits: Array<CommitInfo>;
}

export interface CommitsDetailsRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** User IDs of committers */
	committers: Array<string>;
	/** Name of the project module */
	module?: string;
}

export interface CommitsSummaryDTO {
	/** Total number of commits */
	totalCommits: number;
	/** Number of commits that didn't affect any module */
	offsiteCommits: number;
	/** Number of modules affected */
	modulesTouched: number;
}

export interface CommitsSummaryRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** User IDs of committers */
	committers: Array<string>;
}

export interface CommitterModuleValue {
	/** User ID of the committer */
	committer: string;
	/** See ModuleValue parameters */
	items: Array<ModuleValue>;
}

export interface CommitterTimeValue {
	/** User ID of the committer */
	committer: string;
	/** See TimeValue parameters */
	items: Array<TimeValue>;
}

export interface CommitterUserInfo {
	/** VCS committer name */
	committer: string;
	/** User ID of the committer */
	userId: string;
}

export interface CompareGraphDTO {
	/** See RevisionInfoDTO parameters */
	revisions: Array<RevisionInfoDTO>;
	/** See RevisionListGraphDTO parameters */
	graph: RevisionListGraphDTO;
	/** The length of the displayed path from the branching revision to the base */
	pathToBaseLength: number;
	/** The actual length of the path from the branching revision to the base */
	fullPathToBaseLength: number;
	/** The length of the displayed path from the branching revision to the second revision */
	pathToSecondLength: number;
	/** The actual length of the path from the branching revision to the second revision */
	fullPathToSecondLength: number;
}

export interface CompareInfoDTO {
	/** Revision ID on the left hand side of the comparison */
	leftRevisionId: string;
	/** Revision ID on the right hand side of the comparison */
	rightRevisionId: string;
	/** The list of project head names for completion */
	heads: Array<string>;
	/** Number of commits that took place between the revisions */
	commitsCount: number;
	/** Number of files affected by these commits */
	filesCount: number;
	/** See ExampleComparison parameters */
	examples: Array<ExampleComparison>;
	/** See BranchingRevisionSuggestion parameters */
	suggestion?: BranchingRevisionSuggestion;
}

export interface CompareRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Name of a branch or a revision ID to be used in a comparison */
	leftLocator: string;
	/** Name of a branch or a revision ID to be used in a comparison */
	rightLocator: string;
}

export interface CompletionRateDTO {
	/** Number of reviewers who completed the review, either by accepting or raising concern about the changes */
	completedCount: number;
	/** Total number of reviewers */
	reviewersCount: number;
	/** Whether someone has raised a concern about the changes */
	hasConcern: boolean;
}

export interface ContributorsDistributionDTO {
	/** See CommitterTimeValue parameters */
	items: Array<CommitterTimeValue>;
	/** The specific time intervals that define the distribution */
	timePoints: Array<number>;
	/** See CommitterUserInfo parameters */
	users: Array<CommitterUserInfo>;
}

export interface ContributorsDistributionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Name of the project module */
	module?: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** The specific time intervals that define the distribution (Unix timestamps) */
	timePoints: Array<number>;
}

export interface CreateDiscussionRequestDTO {
	/** See AnchorDTO parameters */
	anchor: AnchorDTO;
	/** See ReviewIdDTO parameters */
	reviewId?: ReviewIdDTO;
	/** Text of the discussion */
	text: string;
	/** Project ID in Upsource */
	projectId: string;
	/** Currently not in use */
	markupType?: string;
	/** Discussion labels. See LabelDTO parameters */
	labels: Array<LabelDTO>;
}

export interface CreateIssueFromDiscussionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the discussion */
	discussionId: string;
	/** See IssueFieldValueIdDTO parameters */
	fieldValue: Array<IssueFieldValueIdDTO>;
}

export interface CreateIssueFromReviewRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Review ID */
	reviewKey: string;
	/** See IssueFieldValueIdDTO parameters */
	fieldValue: Array<IssueFieldValueIdDTO>;
}

export interface CreateProjectRequestDTO {
	/** An ID of the new Upsource project */
	newProjectId: string;
	/** See ProjectSettingsDTO parameters */
	settings: ProjectSettingsDTO;
	/** Optional custom settings */
	custom: Array<SetSettingRequestDTO>;
}

export interface CreateReviewRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Review title (unused, left for compatibility with older clients) */
	title?: string;
	/** Revisions to attach */
	revisions: Array<string>;
	/** Branch name for branch review */
	branch?: string;
	/** Merge review: branch to merge from */
	mergeFromBranch?: string;
	/** Merge review: branch to merge into */
	mergeToBranch?: string;
}

export interface CurrentUserResponseDTO {
	/** Upsource user ID */
	userId: string;
	/** Upsource login */
	login: string;
	/** Visible name */
	name: string;
	/** The user is a server admin */
	isServerAdmin: boolean;
	/** The user is a guest user */
	isGuestUser: boolean;
	/** The user is a test user */
	isTestUser: boolean;
	/** The user has the right to create projects */
	canCreateProjects: boolean;
	/** See EmailStatusEnum parameters */
	emailStatus: EmailStatusEnum;
	/** The list of projects where the user has admin permissions */
	adminPermissionsInProjects: Array<string>;
	/** The list of projects where the user has permission to edit reviews */
	reviewEditPermissionsInProjects: Array<string>;
	/** The list of projects where the user has permission to view reviews */
	reviewViewPermissionsInProjects: Array<string>;
	/** The list of projects where the user has permission to create/merge pull requests */
	codeContributePermissionsInProjects: Array<string>;
	/** Checks if EULA is accepted by the current user. Returns 'null' if EULA is not set up in Hub */
	isEULAAccepted?: boolean;
}

export interface DeleteRoleRequestDTO {
	/** ID of the Upsource project */
	projectId: string;
	/** ID of the Upsource user */
	userId: string;
	/** Role key */
	roleKey: string;
}

export interface DiscussionIdDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the discussion */
	discussionId: string;
}

export interface DiscussionInFeedDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Discussion ID */
	discussionId: string;
	/** See AnchorDTO parameters */
	anchor: AnchorDTO;
	/** See CommentDTO parameters */
	comments: Array<CommentDTO>;
	/** See ShortReviewInfoDTO parameters */
	review?: ShortReviewInfoDTO;
	/** Discussion labels. See LabelDTO parameters */
	labels: Array<LabelDTO>;
	/** Whether a discussion has been read by the requester */
	read?: ReadEnum;
	/** Whether a discussion has been starred by the requester */
	isStarred?: boolean;
	/** An ID of the first unread comment */
	firstUnreadCommentId?: string;
	/** An ID of the issue linked to the discussion */
	issue?: string;
	/** Whether the discussion is resolved */
	isResolved?: boolean;
	/** If the discussion is resolved, contains the ID of the user who resolved it */
	resolvedBy?: string;
}

export interface DiscussionInFileDTO {
	/** ID of the discussion */
	discussionId: string;
	/** Current discussion anchor */
	anchor: AnchorDTO;
	/** Original discussion anchor */
	origin?: AnchorDTO;
	/** See CommentDTO parameters */
	comments: Array<CommentDTO>;
	/** See ReadEnum parameters */
	read?: ReadEnum;
	/** Whether the discussion is starred */
	isStarred?: boolean;
	/** See ShortReviewInfoDTO parameters */
	review?: ShortReviewInfoDTO;
	/** Discussion labels. See LabelDTO parameters */
	labels: Array<LabelDTO>;
	/** An ID of the issue linked to the discussion */
	issue?: string;
	/** Whether the discussion is resolved */
	isResolved?: boolean;
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface DiscussionInFileWithFileDTO {
	/** VCS revision ID */
	revisionId?: string;
	/** A full path of the file starting with a slash (e.g. /folder/subfolder/file.txt ) */
	fileName: string;
	/** See DiscussionInFileDTO parameters */
	discussionInFile: DiscussionInFileDTO;
}

export interface DiscussionInReviewDTO {
	/** ID of the discussion */
	discussionId: string;
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
}

export interface DiscussionsGroupDTO {
	/** Path to file */
	fileId?: string;
	/** Discussions contained in the file. See DiscussionsInFileDTO parameters */
	discussions: DiscussionsInFileDTO;
}

export interface DiscussionsInFileDTO {
	/** See DiscussionInFileDTO parameters */
	discussions: Array<DiscussionInFileDTO>;
}

export interface DiscussionsInFilesDTO {
	/** See DiscussionInFileWithFileDTO parameters */
	discussions: Array<DiscussionInFileWithFileDTO>;
}

export interface DiscussionsInProjectDTO {
	/** See DiscussionInFileDTO parameters */
	discussions: Array<DiscussionInFileDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore?: boolean;
	/** Total number of discussions matching query */
	totalCount?: number;
}

export interface DiscussionsInProjectRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** A query string */
	query: string;
	/** Number of discussions to return */
	limit: number;
	/** Number of discussions to skip from the top (for pagination) */
	skip?: number;
}

export interface DiscussionsInRevisionDTO {
	/** See DiscussionsGroupDTO parameters */
	groups: Array<DiscussionsGroupDTO>;
}

export interface EditLabelRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See LabelDTO parameters */
	label: LabelDTO;
}

export interface EditLabelsRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Discussion labels IDs */
	labelId: Array<string>;
}

export interface EditProjectRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See ProjectSettingsDTO parameters */
	settings: ProjectSettingsDTO;
}

export interface EditReviewDescriptionRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Review description (Markdown is supported) */
	text: string;
}

export interface ElementDocumentationDTO {
	/** Text of the element documentation */
	docString?: string;
}

export interface ExampleComparison {
	/** The left location in the example */
	leftLocator: string;
	/** The right location in the example (usually a default branch) */
	rightLocator: string;
	/** The last commit time */
	lastCommitTime: number;
}

export interface ExportDataResponseDTO {
	/** A full path to the server */
	serverPath: string;
}

export interface ExternalInspectionDTO {
	/** VCS revision ID */
	revisionId: string;
	/** Name of the file */
	fileName: string;
	/** Line number */
	line: number;
	/** Inspection severity */
	severity: InspectionSeverityEnum;
	/** Inspection message */
	message: string;
}

export interface ExternalLinkDTO {
	/** External link URL */
	url: string;
	/** External link prefix */
	prefix: string;
}

export interface FeedDTO {
	/** See FeedItemDTO parameters */
	feedItems: Array<FeedItemDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface FeedItemDTO {
	/** News feed item ID */
	feedItemId: string;
	/** Project ID in Upsource */
	projectId: string;
	/** See DiscussionInFeedDTO parameters */
	discussion?: DiscussionInFeedDTO;
	/** See RevisionInfoDTO parameters */
	addedRevisions: Array<RevisionInfoDTO>;
	/** See RevisionInfoDTO parameters */
	removedRevisions: Array<RevisionInfoDTO>;
	/** See ParticipantInReviewDTO parameters */
	newParticipantInReview?: ParticipantInReviewDTO;
	/** Show removed participants */
	removedParticipantFromReview?: string;
	/** See ParticipantStateChangedDTO parameters */
	participantStateChanged?: ParticipantStateChangedDTO;
	/** See ShortReviewInfoDTO parameters */
	createdReview?: ShortReviewInfoDTO;
	/** See ShortReviewInfoDTO parameters */
	modifiedReview?: ShortReviewInfoDTO;
	/** See ReviewIdDTO parameters */
	removedReview?: ReviewIdDTO;
	/** See ReviewStateChangedDTO parameters */
	reviewStateChanged?: ReviewStateChangedDTO;
	/** The branch name for the "Review stopped branch tracking" feed event */
	branchTrackingStopped?: string;
	updatedDeadline?: number;
	/** Whether the feed item relates to the pull request action */
	pullRequest?: string;
	/** Unix timestamp */
	date: number;
	/** The ID of the user who performed the feed action */
	actorId: string;
	/** Indicates that a review was squashed to a single revision */
	squashedToRevision?: RevisionInfoDTO;
	/** Indicates that a discussion was removed */
	removedDiscussionId?: string;
}

export interface FeedRequestDTO {
	/** Number of news feed messages returned */
	limit: number;
	/** Feed type, see FeedTypeEnum for possible values */
	type: FeedTypeEnum;
	/** Project ID in Upsource */
	projectId?: string;
	/** Review ID */
	reviewId?: string;
	/** Search query. Use '#my' to request the personal feed, or leave empty for the full feed */
	searchQuery?: string;
	/** Review feed sorting ('Natural' by default) */
	reviewFeedSort?: ReviewFeedSortEnum;
}

export interface FileAnnotationResponseDTO {
	/** See FileAnnotationSectionDTO parameters */
	retrospective: Array<FileAnnotationSectionDTO>;
	/** See FileAnnotationSectionDTO parameters */
	perspective: Array<FileAnnotationSectionDTO>;
}

export interface FileAnnotationSectionDTO {
	/** Line number to start with */
	startLine: number;
	/** How many lines */
	lineCount: number;
	/** See RevisionInfoDTO parameters */
	revision: RevisionInfoDTO;
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	filePath: string;
	/** A reference to the prior revision of this section (only revision and file, but not the line number / line count) */
	priorChangeAnnotation?: FileAnnotationSectionDTO;
}

export interface FileContentDTO {
	/** File text */
	text: string;
	/** See FoldingInfoDTO parameters */
	foldings: Array<FoldingInfoDTO>;
	/** Whether syntax markup is available for this file type */
	isSyntaxSupported?: boolean;
	/** See TextMarkupDTO parameters */
	syntax: Array<TextMarkupDTO>;
}

export interface FileContentRawResponseDTO {
	/** Base64-encoded contents of a file */
	base64: string;
}

export interface FileContentResponseDTO {
	/** See FileContentTypeDTO parameters */
	contentType: FileContentTypeDTO;
	/** See FileContentDTO parameters */
	fileContent?: FileContentDTO;
}

export interface FileContentTypeDTO {
	/** Whether the file is presentable as text */
	isText: boolean;
	/** Whether the file is a directory */
	isDirectory: boolean;
	/** Whether file contents are generated */
	isGenerated: boolean;
	/** Whether the file can be downloaded */
	canDownload: boolean;
	/** File extension */
	fileType: string;
}

export interface FileContributorsResponseDTO {
	/** User IDs of the contributors */
	authorIds: Array<string>;
	/** Number of changes made to the file */
	authoredChangesCounts: Array<number>;
	/** Number of reviews performed on the file */
	reviewedChangesCounts: Array<number>;
	/** The major contributor to the file, if there is one */
	majorContributorUserId?: string;
}

export interface FileDiffFragmentDTO {
	/** Line number to start with */
	leftFileStartLine: number;
	/** How many lines */
	leftFileLineCount: number;
	/** Line number to start with */
	rightFileStartLine: number;
	/** How many lines */
	rightFileLineCount: number;
	/** Indicates that a fragment is unchanged ("true" for unchanged commented lines) */
	isUnchanged: boolean;
	/** Ranges of text that were added */
	addedRanges: Array<RangeDTO>;
	/** Ranges of text that were deleted */
	deletedRanges: Array<RangeDTO>;
}

export interface FileDiffRequestDTO {
	/** See FileInRevisionDTO parameters */
	leftFile?: FileInRevisionDTO;
	/** See FileInRevisionDTO parameters */
	rightFile?: FileInRevisionDTO;
	/** Whether to ignore whitespace changes */
	ignoreWhitespace: boolean;
	/** Whether the left file for comparison is 'no-file' (for internal use only) */
	isLeftFileDefinedAsNull?: boolean;
	/** Number of context lines around the modified fragment */
	contextLines?: number;
}

export interface FileDiffResponseDTO {
	/** See FileInRevisionDTO parameters */
	leftFile?: FileInRevisionDTO;
	/** See FileInRevisionDTO parameters */
	rightFile?: FileInRevisionDTO;
	/** See FileDiffFragmentDTO parameters */
	fragments: Array<FileDiffFragmentDTO>;
}

export interface FileDiffSummaryDTO {
	/** See FileInRevisionDTO parameters */
	file: FileInRevisionDTO;
	/** How many lines were added */
	addedLines: number;
	/** How many lines were deleted */
	removedLines: number;
}

export interface FileExternalInspectionsDiffResponseDTO {
	/** Name of the file containing differing inspections */
	fileId: string;
	/** Count of introduced problems */
	introduced?: InspectionsCountDTO;
	/** Count of fixed problems */
	fixed?: InspectionsCountDTO;
}

export interface FileFragmentAuthorsRequestDTO {
	/** See FileInRevisionDTO parameters */
	file: FileInRevisionDTO;
	/** Line number the fragment starts with */
	startLine: number;
	/** Line number the fragment ends with */
	endLine: number;
}

export interface FileHistoryChartDTO {
	/** Age of the oldest file on the chart (Unix timestamp) */
	maxAge: number;
	/** Number of edits for the most edited file on the chart */
	maxEdits: number;
	/** Full paths to the files starting with a slash (e.g. /directory/file.txt) */
	paths: Array<string>;
	/** Unix timestamps of first edits */
	firstEdits: Array<number>;
	/** See FileHistoryFrameDTO parameters */
	frames: Array<FileHistoryFrameDTO>;
}

export interface FileHistoryChartRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Number of frames */
	framesCount?: number;
}

export interface FileHistoryFrameDTO {
	/** Unix timestamp of the frame */
	timestamp: number;
	/** Counts of file edits since the previous frame */
	deltas: Array<number>;
}

export interface FileHistoryItemDTO {
	/** Type of change (see DiffTypeEnum) */
	diffType: DiffTypeEnum;
	/** See RevisionInfoDTO parameters */
	revision: RevisionInfoDTO;
	/** A full path of the file starting with a slash (e.g. /folder/subfolder/file.txt ) */
	fileName: string;
}

export interface FileHistoryRequestDTO {
	/** See FileInRevisionDTO parameters */
	file: FileInRevisionDTO;
	/** History size limit */
	limit: number;
	/** Number of history entries (file revisions) to skip from the top (for pagination) */
	skip?: number;
}

export interface FileHistoryResponseDTO {
	/** See FileHistoryItemDTO parameters */
	history: Array<FileHistoryItemDTO>;
	/** See RevisionListGraphDTO parameters */
	graph?: RevisionListGraphDTO;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface FileInReviewDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** See FileInRevisionDTO parameters */
	file: FileInRevisionDTO;
}

export interface FileInReviewDiffRequestDTO {
	/** See FileInReviewDTO parameters */
	file: FileInReviewDTO;
	/** Whether to ignore whitespace changes */
	ignoreWhitespace: boolean;
	/** See RevisionsSetDTO parameters */
	revisions?: RevisionsSetDTO;
	/** Whether to show the changes that were filtered out in the review diff. 'false' by default. */
	showUnrelatedChanges?: boolean;
	/** Number of context lines around the modified fragment */
	contextLines?: number;
}

export interface FileInReviewReadStatusRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	file: string;
	/** See RevisionsSetDTO parameters */
	revisions: RevisionsSetDTO;
	/** Pass 'true' to mark the file as unread */
	markAsUnread?: boolean;
}

export interface FileInRevisionDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** VCS revision ID */
	revisionId: string;
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	fileName: string;
}

export interface FileInlineDiffResponseDTO {
	/** Whether file contents are identical in both revisions */
	isIdentical: boolean;
	/** Text of the diff */
	text: string;
	/** See FileInRevisionDTO parameters */
	oldFile?: FileInRevisionDTO;
	/** See FileInRevisionDTO parameters */
	newFile?: FileInRevisionDTO;
	/** See FileContentTypeDTO parameters */
	contentType: FileContentTypeDTO;
	/** How many lines were added */
	addedLines: Array<number>;
	/** How many lines were removed */
	removedLines: Array<number>;
	/** How many lines were modified */
	modifiedLines: Array<number>;
	/** Ranges of collapsed text (lines) */
	collapsedLines: Array<RangeDTO>;
	/** Ranges of text that were added */
	addedRanges: Array<RangeDTO>;
	/** Ranges of text that were removed */
	removedRanges: Array<RangeDTO>;
	/** Determines if syntax markup is supported for this file type */
	isSyntaxSupported?: boolean;
	/** See TextMarkupDTO parameters */
	syntaxMarkup: Array<TextMarkupDTO>;
	/** A mapping of diff ranges to ranges in the old document */
	diffToOldDocument: Array<RangeMappingDTO>;
	/** A mapping of diff ranges to ranges in the new document */
	diffToNewDocument: Array<RangeMappingDTO>;
	/** Line numbers as they appear in the old file */
	oldLineNumbers: Array<number>;
	/** Line numbers as they appear in the new file */
	newLineNumbers: Array<number>;
	/** Authors of code fragments in the review diff */
	annotation: Array<FileAnnotationSectionDTO>;
	/** Some changes were filtered out (in the review diff) */
	hasUnrelatedChanges?: boolean;
	/** When the diff relates to the merge result, holds the conflict type (see ConflictTypeEnum) */
	conflictType?: ConflictTypeEnum;
}

export interface FileMergeInlineDiffRequestDTO {
	/** See FileInRevisionDTO parameters */
	fileId: FileInRevisionDTO;
	/** The source revision from which the branch originated */
	sourceRevisionId: string;
	/** The base branch to compare against */
	baseBranch: string;
	/** Type of change (see DiffTypeEnum) */
	diffType: DiffTypeEnum;
	/** Whether to ignore whitespace changes */
	ignoreWhitespace: boolean;
	/** Number of context lines around the modified fragment */
	contextLines?: number;
}

export interface FileMetaResponseDTO {
	/** Whether the current revision is the latest */
	isUpToDate: boolean;
	/** Whether the file is deleted */
	isDeleted: boolean;
	/** Whether the file is merged into the default branch */
	isMerged: boolean;
	/** See RevisionInfoDTO parameters */
	lastModifiedRevision: RevisionInfoDTO;
	/** Is last modified revision merged into the default branch */
	isLastModifiedRevisionMerged: boolean;
	/** See RevisionInfoDTO parameters */
	deletedInRevision?: RevisionInfoDTO;
	/** Holds the branch in which the current file is deleted */
	deletedInBranch?: string;
	/** See RevisionInBranchDTO parameters */
	modifiedInParallelBranches: Array<RevisionInBranchDTO>;
	/** The default branch (null if not set) */
	defaultBranch?: string;
}

export interface FileOwnershipSummaryDTO {
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	filePath: string;
	/** See OwnershipSummaryEnum parameters */
	state: OwnershipSummaryEnum;
	/** Upsource user ID */
	userId?: string;
}

export interface FilePathToRootDTO {
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	fileName: string;
	/** See ProjectItemsListDTO parameters */
	pathToRoot: ProjectItemsListDTO;
}

export interface FilePsiRequestDTO {
	/** See FileInRevisionDTO parameters */
	file: FileInRevisionDTO;
	/** Whether to request references */
	requestReferences?: boolean;
	/** Whether to request gutter marks */
	requestGutterMarks?: boolean;
	/** Whether to request inspections */
	requestInspections?: boolean;
}

export interface FilePsiResponseDTO {
	/** Whether the code model is available for a file */
	hasPsi?: boolean;
	/** PSI status message, e.g. a failure to provide code intelligence or another message regarding the file in general */
	psiStatusMessage?: string;
	/** See FileReferenceCodeMarkupDTO parameters */
	referenceMarkup?: FileReferenceCodeMarkupDTO;
	/** See FileTextMarkupDTO parameters */
	textMarkup?: FileTextMarkupDTO;
	/** See GutterCodeMarkupsDTO parameters */
	gutterMarks?: GutterCodeMarkupsDTO;
	/** See CodeInspectionsDTO parameters */
	inspections?: CodeInspectionsDTO;
	/** External inspections */
	externalInspections: Array<InspectionCodeMarkupItemDTO>;
}

export interface FileReferenceCodeMarkupDTO {
	/** See ReferenceCodeMarkupItemDTO parameters */
	markup: Array<ReferenceCodeMarkupItemDTO>;
	/** See MarkupNavigationPointDTO parameters */
	navigationPointsTable: Array<MarkupNavigationPointDTO>;
	/** See FileInRevisionDTO parameters */
	fileNameTable: Array<FileInRevisionDTO>;
	/** See LocalDeclarationRangeDTO parameters */
	localDeclarationRanges: Array<LocalDeclarationRangeDTO>;
}

export interface FileTextMarkupDTO {
	/** See TextMarkupDTO parameters */
	markup: Array<TextMarkupDTO>;
}

export interface FindBranchRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Search query, e.g. part of the branch name */
	pattern: string;
	/** Max number of results to return */
	limit: number;
}

export interface FindBranchResponseDTO {
	/** The list of matched branches */
	branches: Array<string>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface FindCommitsRequestDTO {
	/** See FindCommitsRequestPatternDTO parameters */
	commits: Array<FindCommitsRequestPatternDTO>;
	/** Whether revision changes should be returned along with revision metadata (unused, left for compatibility with older clients) */
	requestChanges?: boolean;
	/** Number of commits to return */
	limit?: number;
}

export interface FindCommitsRequestPatternDTO {
	/** VCS revision ID */
	revisionId?: string;
	/** Project ID in Upsource */
	projectId?: string;
	/** A fragment of the commit message used as a search query */
	messageFragment?: string;
	/** Name of the commit author */
	author?: string;
	/** Unix timestamp of the commit */
	commitTime?: number;
}

export interface FindCommitsResponseCommitDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Project name */
	projectName: string;
	/** See RevisionInfoDTO parameters */
	revision: RevisionInfoDTO;
	/** See RevisionsDiffDTO parameters */
	changes?: RevisionsDiffDTO;
}

export interface FindCommitsResponseCommitsDTO {
	/** See FindCommitsResponseCommitDTO parameters */
	commits: Array<FindCommitsResponseCommitDTO>;
}

export interface FindCommitsResponseDTO {
	/** See FindCommitsResponseCommitsDTO parameters */
	commits: Array<FindCommitsResponseCommitsDTO>;
}

export interface FindHierarchyResultDTO {
	/** The list of element's ancestors */
	ancestors: Array<NavigationTargetItemDTO>;
	/** The list of element's inheritors */
	inheritors: Array<NavigationTargetItemDTO>;
}

export interface FindProjectsRequestDTO {
	/** Search query, e.g. part of the name */
	pattern: string;
	/** Number of projects to return */
	limit: number;
	/** Whether to search for the exact match */
	isExact?: boolean;
}

export interface FindPullRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Branch name */
	branch: string;
}

export interface FindUsagesItemDTO {
	/** See NavigationTargetItemDTO parameters */
	navigationTarget: NavigationTargetItemDTO;
	/** Preview text */
	previewText: string;
	/** Start offset */
	startOffsetInPreview: number;
	/** End offset */
	endOffsetInPreview: number;
	/** Line number */
	lineNumber: number;
	/** Identifies if this usage is semantic-sensitive or not */
	isImportant: boolean;
}

export interface FindUsagesResponseDTO {
	/** See FilePathToRootDTO parameters */
	filePathToRoot: Array<FilePathToRootDTO>;
	/** See FindUsagesItemDTO parameters */
	item: Array<FindUsagesItemDTO>;
}

export interface FindUsersRequestDTO {
	/** Project ID in Upsource */
	projectId?: string;
	/** Search query, e.g. part of the name */
	pattern: string;
	/** Number of results to return */
	limit: number;
}

export interface FoldingInfoDTO {
	/** Start offset of the foldable range */
	fromOffset: number;
	/** End offset of the foldable range */
	toOffset: number;
	/** Whether the range is initially collapsed */
	isInitialCollapsed: boolean;
	/** Text to be displayed in place of the folded range */
	collapsedText: string;
}

export interface FullUserInfoDTO {
	/** Upsource user ID */
	userId: string;
	/** Upsource user name */
	name: string;
	/** Whether the user has an account in Hub */
	isResolved: boolean;
	/** Flags the currently logged-in user */
	isMe: boolean;
	/** Whether the user is online */
	isOnline?: boolean;
	/** URL of the userpic */
	avatarUrl?: string;
	/** URL of the Hub user profile */
	profileUrl?: string;
	/** Email address */
	email?: string;
	/** Login */
	login?: string;
	/** Absence end date, if the user is currently on leave */
	absentUntil?: number;
}

export interface GetProjectSettingRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See GetSettingRequestDTO parameters */
	request: GetSettingRequestDTO;
}

export interface GetSettingRequestDTO {
	/** Setting key */
	key: string;
}

export interface GetSettingResponseDTO {
	/** User setting value */
	value?: string;
}

export interface GotoFileItemDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the revision */
	revisionId: string;
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	fileName: string;
	/** Whether the file is deleted */
	isDeleted: boolean;
	/** Unix timestamp of the last modification */
	lastModified?: number;
	/** Branch name */
	branch?: string;
}

export interface GotoFileRequestDTO {
	/** Project ID in Upsource */
	projectId?: string;
	/** ID of the revision (search in heads if not provided) */
	revisionId?: string;
	/** See ReviewIdDTO parameters */
	reviewId?: ReviewIdDTO;
	/** Search query, e.g. part of the name */
	pattern: string;
	/** Number of results to return */
	limit: number;
}

export interface GotoFileResponseDTO {
	/** See GotoFileItemDTO parameters */
	items: Array<GotoFileItemDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface GutterCodeMarkupItemDTO {
	/** See RangeDTO parameters */
	range: RangeDTO;
	/** See GutterMarkEnum parameters */
	gutterMark: Array<GutterMarkEnum>;
	/** Index in 'referenceMarkup' list this gutter mark corresponds to */
	relatedSemanticMarkup: number;
}

export interface GutterCodeMarkupsDTO {
	/** See GutterCodeMarkupItemDTO parameters */
	items: Array<GutterCodeMarkupItemDTO>;
}

export interface HidePredefinedLabelsRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Whether to show or hide predefined labels */
	doHide: boolean;
}

export interface InspectionCodeMarkupItemDTO {
	/** See RangeDTO parameters */
	range: RangeDTO;
	/** See TextAttributeDTO parameters */
	textAttribute: TextAttributeDTO;
	/** Inspection message */
	message: string;
	/** See InspectionSeverityEnum parameters */
	severity: InspectionSeverityEnum;
	/** Name (if any) of this markup key, given by IntelliJ IDEA */
	textAttributesKey?: string;
}

export interface InspectionsCountDTO {
	errors: number;
	warnings: number;
	weakWarnings: number;
	infos: number;
}

export interface InspectionsDiffDTO {
	/** See InspectionsDiffForFileDTO parameters */
	diffForFile: Array<InspectionsDiffForFileDTO>;
}

export interface InspectionsDiffForFileDTO {
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	path: string;
	/** Introduced problems. See InspectionCodeMarkupItemDTO parameters */
	introduced: Array<InspectionCodeMarkupItemDTO>;
	/** Fixed problems. See InspectionCodeMarkupItemDTO parameters */
	fixed: Array<InspectionCodeMarkupItemDTO>;
	/** A list of ranges pointing to fixed problems in the original revision */
	fixedOriginalRanges: Array<RangeDTO>;
}

export interface InviteUserRequestDTO {
	/** ID of the Upsource project */
	projectId: string;
	/** Email address of the Upsource user */
	email: string;
}

export interface InviteUserResponseDTO {
	/** See UserRolesDTO parameters */
	user?: UserRolesDTO;
	/** Whether the user is already invited */
	isInvited: boolean;
}

export interface IssueFieldDTO {
	/** Field ID */
	id: string;
	/** Field name. The following fields are recognized for JIRA: url, linkUrl, projectId, login, password, pkcs12cert, pkcs12pass, enableCreateIssue, enableReviewComment, wfc_reviewCreated, wfc_reviewAccepted, wfc_reviewRejected, wfc_reviewClosed. YouTrack configuration in Upsource is delegated to Hub. */
	name: string;
	/** Default value */
	defaultValueId?: string;
	/** See IssueFieldValueDTO parameters */
	value: Array<IssueFieldValueDTO>;
}

export interface IssueFieldValueDTO {
	/** Value ID */
	valueId: string;
	/** Value title */
	name: string;
	/** HTML presentation of the value, e.g. a <span> with some inline styles */
	html: string;
}

export interface IssueFieldValueIdDTO {
	/** Field ID (see IssueFieldDTO) */
	fieldId: string;
	/** Value ID (see IssueFieldValueDTO) */
	valueId: string;
}

export interface IssueIdDTO {
	/** Issue ID */
	issueId: string;
	/** Issue link */
	issueLink?: string;
	/** Whether the issue has been created from Upsource */
	isCreatedFromUpsource?: boolean;
}

export interface IssueInfoDTO {
	/** Issue ID */
	issueId: string;
	/** Issue URL */
	issueLink?: string;
	/** Issue summary */
	summary?: string;
	/** Whether the issue has been resolved */
	isResolved?: boolean;
	/** HTML presentation of issue fields (Issue Type, Priority, State) */
	field: Array<string>;
}

export interface IssueInfoRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Issue ID */
	issueId: IssueIdDTO;
}

export interface IssueRequiredFieldDTO {
	/** Issue type ID */
	issueTypeId: string;
	/** See IssueFieldDTO parameters */
	field: IssueFieldDTO;
	/** Field type */
	fieldType: IssueRequiredFieldTypeEnum;
}

export interface IssueTrackerProjectDetailsDTO {
	/** Issue tracker provider key ("YouTrack", "JIRA") */
	providerKey: string;
	/** Issue tracker project URL */
	projectUrl: string;
	/** See IssueFieldDTO parameters */
	field: Array<IssueFieldDTO>;
	/** Whether an issue can be created */
	canCreateIssue: boolean;
	/** See IssueRequiredFieldDTO parameters */
	requiredField: Array<IssueRequiredFieldDTO>;
}

export interface IssueTrackerProviderDTO {
	/** Issue tracker project key (JIRA, YouTrack) */
	providerKey: string;
	/** Text of the issue tracker configuration script (must be a React component) */
	scriptText: string;
	/** Whether issue tracker integration can be set up automatically */
	isAutoSetup: boolean;
}

export interface IssueTrackerProviderSettingDTO {
	/** Setting key */
	name: string;
	/** Setting value */
	value: string;
}

export interface IssueTrackerProviderSettingsDTO {
	/** Issue tracker provider key ("YouTrack", "JIRA") */
	providerKey: string;
	/** Settings used to set up the integration (e.g server URL, login credentials, project ID in the issue tracker) */
	settings: Array<IssueTrackerProviderSettingDTO>;
}

export interface IssueTrackerProvidersListDTO {
	/** See IssueTrackerProviderDTO parameters */
	providers: Array<IssueTrackerProviderDTO>;
}

export interface LabelDTO {
	/** Discussion label ID */
	id?: string;
	/** Discussion label name (e.g. bug, code style, enhancement, help wanted) */
	name: string;
	/** Discussion label color */
	colorId?: string;
}

export interface LabelStats {
	/** Discussion label. See LabelDTO parameters */
	label: LabelDTO;
	/** See UserValue parameters */
	countsPerUser: Array<UserValue>;
}

export interface LabelsListDTO {
	/** Indicates if predefined labels are hidden */
	hidePredefinedLabels: boolean;
	/** Predefined discussion labels. See LabelDTO parameters */
	predefinedLabels: Array<LabelDTO>;
	/** Custom discussion labels. See LabelDTO parameters */
	customLabels: Array<LabelDTO>;
}

export interface LabelsRequestDTO {
	/** Project ID in Upsource */
	projectId?: string;
}

export interface LocalDeclarationRangeDTO {
	/** ID of the target element */
	targetId: number;
	/** Start offset */
	startOffset: number;
	/** End offset */
	endOffset: number;
}

export interface MarkupNavigationPointDTO {
	/** ID of the target element */
	targetId: number;
	/** Index of the file name as stored in the 'fileNameTable' table of the Upsource database */
	fileId: number;
	/** Start offset */
	startOffset: number;
	/** End offset */
	endOffset: number;
	/** Stub index ID */
	stubIndex: number;
}

export interface MatchingRevisionsResponseDTO {
	/** See RevisionInfoDTO parameters */
	revision: Array<RevisionInfoDTO>;
}

export interface ModuleTimeValue {
	/** Name of the project module */
	module: string;
	/** See TimeValue parameters */
	items: Array<TimeValue>;
}

export interface ModuleValue {
	/** Name of the project module */
	module: string;
	/** The value associated with the module */
	value: number;
}

export interface ModulesDistributionDTO {
	/** See ModuleTimeValue parameters */
	items: Array<ModuleTimeValue>;
	/** The specific time intervals that define the distribution (Unix timestamps) */
	timePoints: Array<number>;
	/** Names of the project modules */
	modules: Array<string>;
}

export interface ModulesDistributionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** User IDs of committers */
	committers: Array<string>;
	/** The specific time intervals that define the distribution (Unix timestamps) */
	timePoints: Array<number>;
}

export interface NavigationTargetItemDTO {
	/** See FileInRevisionDTO parameters */
	fileId: FileInRevisionDTO;
	/** Start offset */
	startOffset: number;
	/** End offset */
	endOffset: number;
	/** Stub index ID */
	stubIndex: number;
	/** See TargetDescriptionDTO parameters */
	targetDescription?: TargetDescriptionDTO;
}

export interface ParticipantInReviewDTO {
	/** Participant user ID */
	userId: string;
	/** Participant's role in the review. See RoleInReviewEnum parameters */
	role: RoleInReviewEnum;
	/** State of the participant. See ParticipantStateEnum parameters */
	state?: ParticipantStateEnum;
}

export interface ParticipantInReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** See ParticipantInReviewDTO parameters */
	participant: ParticipantInReviewDTO;
}

export interface ParticipantProgressDTO {
	/** User ID of the review participant */
	userId: string;
	/** Number of files that were viewed by the participant */
	readFilesCount: number;
	/** Unix timestamp of the last viewing */
	lastSeenTimestamp: number;
}

export interface ParticipantStateChangedDTO {
	/** An Upsource user ID of the participant */
	participant: string;
	/** See ParticipantStateEnum parameters */
	oldState: ParticipantStateEnum;
	/** See ParticipantStateEnum parameters */
	newState: ParticipantStateEnum;
}

export interface ProjectActivityDTO {
	/** See TimeValue parameters */
	items: Array<TimeValue>;
	/** Names of project modules */
	modules: Array<string>;
	/** See AnalyzerStats parameters */
	stats: AnalyzerStats;
}

export interface ProjectActivityRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Name of the project module */
	module?: string;
	/** Unix timestamp used to calculate the distribution. This timestamp encapsulates the time set on the client and makes the server generate even days, months, etc. for the particular client. */
	referenceTime: number;
}

export interface ProjectCommittersDTO {
	/** See CommitterUserInfo parameters */
	users: Array<CommitterUserInfo>;
}

export interface ProjectConfigurationResponseDTO {
	/** VCS types supported by the Upsource instance */
	supportedVcs: Array<string>;
}

export interface ProjectFounderDTO {
	/** User ID of the person who created the project */
	userId: string;
	/** Unix timestamp of project creation */
	date: number;
}

export interface ProjectGroupDTO {
	/** Name of the Hub group */
	name: string;
	/** Description of the Hub group */
	description: string;
}

export interface ProjectIdDTO {
	/** Project ID in Upsource */
	projectId: string;
}

export interface ProjectIdListDTO {
	/** Project ID in Upsource */
	projectId: Array<string>;
}

export interface ProjectInfoDTO {
	/** Project name */
	projectName: string;
	/** Project ID in Upsource */
	projectId: string;
	/** Head revision ID */
	headHash: string;
	/** Code review ID pattern */
	codeReviewIdPattern: string;
	/** External links. See ExternalLinkDTO parameters */
	externalLinks: Array<ExternalLinkDTO>;
	/** Configured issue tracker links */
	issueTrackerConnections: Array<ExternalLinkDTO>;
	/** Build system type ("none" to disable code intelligence, "maven" for Maven, "gradle" for Gradle, "idea" for IntelliJ IDEA) */
	projectModelType: string;
	/** Default encoding (e.g. UTF-8) */
	defaultEffectiveCharset: string;
	/** Default branch */
	defaultBranch?: string;
	/** See IssueTrackerProjectDetailsDTO parameters */
	issueTrackerDetails?: IssueTrackerProjectDetailsDTO;
	/** Whether the project is connected to GitHub */
	isConnectedToGithub: boolean;
	/** Whether the project is connected to GitLab */
	isConnectedToGitlab: boolean;
	/** URL of the project icon */
	iconUrl?: string;
	/** See ProjectGroupDTO parameters */
	group?: ProjectGroupDTO;
	isArchived?: boolean;
}

export interface ProjectItemsListDTO {
	/** See ProjectTreeItemDTO parameters */
	items: Array<ProjectTreeItemDTO>;
}

export interface ProjectModel {
	/** Build system type ("none" to disable code intelligence, "maven" for Maven, "gradle" for Gradle, "idea" for IntelliJ IDEA) */
	type: string;
	/** Path to project model */
	pathToModel?: string;
	/** Default project JDK */
	defaultJdkId?: string;
}

export interface ProjectPulseRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** The specific time intervals that define the distribution (Unix timestamps) */
	timePoints: Array<number>;
}

export interface ProjectReadmeResponseDTO {
	/** Text of the README file */
	text: string;
	/** A full path to the README file starting with a slash (e.g. /directory/readme.txt) */
	fileName: string;
	/** Revision ID */
	revisionId: string;
}

export interface ProjectSettingsDTO {
	/** Project name */
	projectName: string;
	/** VCS configuration represented as a JSON-encoded string */
	vcsSettings?: string;
	/** How often to check for new commits (in seconds) */
	checkIntervalSeconds?: number;
	/** See ProjectModel parameters */
	projectModel: ProjectModel;
	/** Code review ID pattern */
	codeReviewIdPattern: string;
	/** Whether to run code inspections */
	runInspections?: boolean;
	/** Name of the inspection profile in IntelliJ IDEA */
	inspectionProfileName?: string;
	/** The contents of maven-settings.xml */
	mavenSettings?: string;
	/** Maven profiles. Space- or comma-separated list */
	mavenProfiles?: string;
	/** Maven project JDK */
	mavenJdkName?: string;
	/** Model conversion system properties */
	modelConversionSystemProperties?: string;
	/** Gradle properties */
	gradleProperties?: string;
	/** Gradle init script */
	gradleInitScript?: string;
	/** See ExternalLinkDTO parameters */
	externalLinks: Array<ExternalLinkDTO>;
	/** See IssueTrackerProviderSettingsDTO parameters */
	issueTrackerProviderSettings?: IssueTrackerProviderSettingsDTO;
	/** Hub user management page URL */
	userManagementUrl?: string;
	/** Default encoding (e.g. UTF-8) */
	defaultEncoding?: string;
	/** Default branch */
	defaultBranch?: string;
	/** A newline-separated list of wildcards. Files matching the patterns specified here will be excluded from reviews */
	ignoredFilesInReview: Array<string>;
	/** A newline-separated list of wildcards. Files matching the patterns specified here — binaries, for example — won't be imported. */
	skipFileContentsImport: Array<string>;
	/** JavaScript language level (one of the following: JS_1_5, ES5, JS_1_8_5, ES6, JSX, NASHORN, FLOW) */
	javascriptLanguageLevel?: string;
	/** PHP language level (one of the following: null, 5.3.0, 5.4.0, 5.5.0, 5.6.0, 7, 7.1) */
	phpLanguageLevel?: string;
	/** List of paths to external dependencies for a PHP project */
	phpExternalDependencies: Array<string>;
	/** List of commands that will be run to set up PHP composer. Default command is "php composer.phar install" */
	phpComposerScript: Array<string>;
	/** Python language level (one of the following: null, 2, 3) */
	pythonLanguageLevel?: string;
	/** "login:password" credentials used to receive build status from the build server */
	buildStatusReceiveToken?: string;
	/** In addition to CLOSE_REVIEW permission, controls whether review authors can close reviews */
	authorCanCloseReview?: boolean;
	/** In addition to DELETE_REVIEW permission, controls whether review authors can delete reviews */
	authorCanDeleteReview?: boolean;
	/** In addition to EDIT_REVIEW permission, controls whether only the person that started a discussion can resolve it */
	limitResolveDiscussion?: boolean;
	/** Default review deadline, in hours */
	reviewDeadlineHours?: number;
	/** Sets whether merge commits should be added to branch reviews */
	addMergeCommitsToBranchReview?: boolean;
	/** Whether the project is archived */
	isArchived?: boolean;
}

export interface ProjectTreeItemDTO {
	/** Display name of a project tree item */
	displayName: string;
	/** Display type – directory, module, file, etc. */
	displayType: string;
	/** Whether an item is a directory */
	isDirectory: boolean;
	/** Whether an item is a module */
	isModule: boolean;
	/** Path to file */
	fileId: string;
	/** Whether an item has children and can be expanded */
	hasChildren: boolean;
}

export interface ProjectTreeMapDTO {
	/** See ProjectTreeMapEntryDTO parameters */
	entries: Array<ProjectTreeMapEntryDTO>;
}

export interface ProjectTreeMapEntryDTO {
	/** File path */
	path: string;
	/** File size */
	size: number;
	/** Number of modifications */
	modificationsCount: number;
	/** Whether a file is binary */
	isBinary: boolean;
	/** Time elapsed since last change (milliseconds) */
	timeSinceLastChange: number;
}

export interface ProjectTreeMapRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Revision ID */
	revisionId: string;
}

export interface ProjectUserGroupsRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Search query, i.e. starting part of the name */
	query?: string;
	/** Maximum number of results to return */
	limit: number;
}

export interface PsiElementIdDTO {
	/** See FileInRevisionDTO parameters */
	fileId: FileInRevisionDTO;
	/** Text range of the given PSI element */
	range: RangeDTO;
	/** Copy of the localIndex from 'ReferenceCodeMarkupItemDTO' to identify the exact PSI element */
	localIndex: number;
}

export interface PulseResponseDTO {
	/** Pulse values (number of commits in a week) for the current authenticated user */
	userValues: Array<number>;
	/** Pulse values for all users in a project */
	allValues: Array<number>;
}

export interface QueryAssistRequestDTO {
	/** See QueryAssistSearchContextEnum parameters */
	context: QueryAssistSearchContextEnum;
	/** Search query */
	query: string;
	/** Caret position */
	caret?: number;
	/** Project ID in Upsource */
	projectId?: string;
}

export interface QueryAssistResponseDTO {
	/** Search query */
	query: string;
	/** Caret position */
	caret?: number;
	/** See QueryAssistSuggestionItem parameters */
	suggestions: Array<QueryAssistSuggestionItem>;
	/** See QueryAssistStyleItem parameters */
	styleRanges: Array<QueryAssistStyleItem>;
}

export interface QueryAssistStyleItem {
	/** Start position of the style range */
	start: number;
	/** Length of the style range */
	length: number;
	/** Name of the style */
	style: string;
}

export interface QueryAssistSuggestionItem {
	/** Caret position */
	caret: number;
	/** Completion start position */
	completionStart: number;
	/** Completion end position */
	completionEnd: number;
	/** Start of the match */
	matchingStart: number;
	/** End of the match */
	matchingEnd: number;
	/** Suggestion text */
	type: string;
	/** Suggestion group */
	group?: string;
	/** Suggestion description */
	description?: string;
	/** Completion prefix */
	prefix?: string;
	/** Completion suffix */
	suffix?: string;
}

export interface RangeDTO {
	/** Start offset of the text range */
	startOffset: number;
	/** End offset of the text range */
	endOffset: number;
}

export interface RangeMappingDTO {
	/** Starting line number */
	from: RangeDTO;
	/** Ending line number */
	to: RangeDTO;
}

export interface ReactionDTO {
	/** ID of the reaction */
	id: string;
	/** List of Upsource user IDs */
	usersIds: Array<string>;
}

export interface ReactionTargetDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** If the reaction corresponds to a comment, ID of the discussion containing that comment */
	discussionId?: string;
	/** If the reaction corresponds to a comment, ID of that comment */
	commentId?: string;
	/** If the reaction corresponds to a revision, ID of that revision */
	revisionId?: string;
	/** If the reaction corresponds to a review, ID of that review */
	reviewId?: string;
}

export interface ReadOnlyModeDTO {
	/** Whether the server is in read-only mode */
	isReadOnly: boolean;
	/** Describes the reason for enabling read-only mode (if any) */
	description?: string;
}

export interface ReferenceCodeMarkupItemDTO {
	/** See RangeDTO parameters */
	range: RangeDTO;
	/** ID of the markup element */
	markupId: number;
	/** ID of the target element */
	targetId: number;
	/** Bit mask of the 'CapabilityFlagsEnum' enum */
	capabilityFlags: number;
	/** Used to identify the exact reference when references overlap */
	localIndex: number;
	/** Hash of the PSI element (if any), used to test PSI elements for equality */
	hash?: string;
}

export interface RemoveCommentRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** An ID of the discussion being removed */
	discussionId: string;
	/** An ID of the comment being removed */
	commentId: string;
}

export interface RemoveCommentResponseDTO {
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface RenameReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** New review title */
	text: string;
}

export interface RenameReviewResponseDTO {
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface ResolveDiscussionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the discussion */
	discussionId: string;
	/** Whether the discussion is resolved */
	isResolved: boolean;
	/** ID of the revision the discussion is linked to */
	revision?: string;
}

export interface ResponsibilityDistributionDTO {
	/** See CommitterModuleValue parameters */
	items: Array<CommitterModuleValue>;
	/** See CommitterUserInfo parameters */
	users: Array<CommitterUserInfo>;
	/** Names of the project modules */
	modules: Array<string>;
	/** See AnalyzerStats parameters */
	stats: AnalyzerStats;
}

export interface ResponsibilityDistributionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
}

export interface ReviewCoverageDTO {
	/** Number of revisions covered by reviews */
	allRevisions: Array<TimeValue>;
	/** Number of revisions covered by open reviews */
	revisionsCoveredByOpen: Array<TimeValue>;
	/** Number of revisions covered by closed reviews */
	revisionsCoveredByClosed: Array<TimeValue>;
}

export interface ReviewCoverageRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See TimeUnitEnum parameters */
	period: TimeUnitEnum;
	/** Unix timestamp used to calculate the distribution. This timestamp encapsulates the time set on the client and makes the server generate even days, months, etc. for the particular client. */
	referenceTime: number;
}

export interface ReviewDeadlineRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Review due date (Unix timestamp) */
	deadline?: number;
}

export interface ReviewDescriptorDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Review title */
	title: string;
	/** Review description */
	description?: string;
	/** See ParticipantInReviewDTO parameters */
	participants: Array<ParticipantInReviewDTO>;
	/** Review state: open(1), closed(2) */
	state: ReviewStateEnum;
	/** Whether the review is unread by the requester */
	isUnread?: boolean;
	/** 'true' if all reviewers have accepted the changes but the review is still open */
	isReadyToClose?: boolean;
	/** Names of tracked branches */
	branch: Array<string>;
	/** List of issue IDs linked to the review */
	issue: Array<IssueIdDTO>;
	/** Whether the review has been removed */
	isRemoved?: boolean;
	/** Unix timestamp of review creation */
	createdAt: number;
	/** ID of the user who created the review */
	createdBy?: string;
	/** Unix timestamp of the last update */
	updatedAt: number;
	/** Review completion rate (e.g. accepted by 1 out of 3 reviewers). See CompletionRateDTO parameters */
	completionRate?: CompletionRateDTO;
	/** A list of discussion counters. See SimpleDiscussionCounterDTO parameters */
	discussionCounter?: SimpleDiscussionCounterDTO;
	/** Review due date (Unix timestamp) */
	deadline?: number;
	/** Whether the review is muted by the currently logged-in user */
	isMuted?: boolean;
	/** Review labels */
	labels: Array<LabelDTO>;
	/** Merge review: branch to merge from */
	mergeFromBranch?: string;
	/** Merge review: branch to merge into */
	mergeToBranch?: string;
}

export interface ReviewIdDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Review ID assigned to it when it's created */
	reviewId: string;
}

export interface ReviewInspectionsDiffRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** IDs of the requested revisions */
	revisions?: RevisionsSetDTO;
}

export interface ReviewListDTO {
	/** See ReviewDescriptorDTO parameters */
	reviews: Array<ReviewDescriptorDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
	/** Total number of reviews */
	totalCount: number;
}

export interface ReviewOwnershipSummaryDTO {
	/** See FileOwnershipSummaryDTO parameters */
	files: Array<FileOwnershipSummaryDTO>;
}

export interface ReviewProgressDTO {
	/** Individual progress for each participant */
	participants: Array<ParticipantProgressDTO>;
	/** Total number of files in review */
	totalFiles: number;
}

export interface ReviewStateChangedDTO {
	/** See ReviewStateEnum parameters */
	oldState: ReviewStateEnum;
	/** See ReviewStateEnum parameters */
	newState: ReviewStateEnum;
}

export interface ReviewStatisticsDTO {
	/** Number of open reviews */
	openReviews: number;
	/** Number of closed reviews */
	closedReviews: number;
	/** Number of revisions covered by reviews */
	allRevisions: number;
	/** Number of revisions covered by open reviews */
	revisionsCoveredByOpenReviews: number;
	/** Number of revisions covered by closed reviews */
	revisionsCoveredByClosedReviews: number;
	/** Review counts per author */
	authorStatsByReviews: Array<UserValue>;
	/** Review counts per reviewer */
	reviewerStatsByReviews: Array<UserValue>;
	/** Review revisions counts per author */
	authorStatsByRevisions: Array<UserValue>;
	/** Review revisions counts per reviewer */
	reviewerStatsByRevisions: Array<UserValue>;
	/** Discussion comments statistics. See CommentsStatisticsDTO parameters */
	commentsStats: CommentsStatisticsDTO;
}

export interface ReviewStatisticsRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp */
	fromTime?: number;
	/** Unix timestamp */
	toTime?: number;
}

export interface ReviewSuggestDTO {
	/** See ShortReviewInfoDTO parameter */
	reviewInfo?: ShortReviewInfoDTO;
	/** The confidence score */
	score?: number;
}

export interface ReviewSummaryChangesRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** IDs of the requested revisions */
	revisions?: RevisionsSetDTO;
}

export interface ReviewSummaryChangesResponseDTO {
	/** See RevisionsDiffDTO parameters */
	diff?: RevisionsDiffDTO;
	/** Review annotation message, e.g. "Some revisions in review are not indexed yet", "Review has too many files" */
	annotation?: string;
	/** The list of files that were omitted in a review according to project settings */
	ignoredFiles: Array<string>;
	/** See FileDiffSummaryDTO parameters */
	fileDiffSummary: Array<FileDiffSummaryDTO>;
}

export interface ReviewSummaryDiscussionsRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** See RevisionsSetDTO parameters */
	revisions?: RevisionsSetDTO;
}

export interface ReviewTargetBranchDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Branch to merge into */
	targetBranch: string;
}

export interface ReviewTimeStatisticsDTO {
	/** Durations of review iterations, sorted in ascending order */
	distribution: Array<number>;
}

export interface ReviewTimeStatisticsRequestDTO {
	/** Upsource user ID */
	userId: string;
}

export interface ReviewersGraphDTO {
	/** User IDs of graph nodes */
	userIds: Array<string>;
	/** Graph links */
	links: Array<ReviewersGraphLinkDTO>;
}

export interface ReviewersGraphLinkDTO {
	/** Index of link source user */
	from: number;
	/** Index of link target user */
	to: number;
	/** Link strength */
	strength: number;
	/** Total reviews count */
	totalReviewsCount: number;
	/** Recent reviews count */
	recentReviewsCount: number;
}

export interface ReviewersGraphRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp, only reviews that were updated later are considered */
	fromTime?: number;
}

export interface ReviewsRequestDTO {
	/** Number of reviews to return */
	limit: number;
	/** Search query (e.g. "state: open") and/or phrase appearing in review title or discussion */
	query?: string;
	/** Sort by: last updated ("updated", default), review ID ("id,asc", "id,desc"), title ("title"), due date ("deadline,asc", "deadline,desc") */
	sortBy?: string;
	/** Project ID in Upsource */
	projectId?: string;
	/** Number of reviews to skip from the top (for pagination) */
	skip?: number;
}

export interface RevisionBranchesResponseDTO {
	/** Branches containing the given revision */
	branchName: Array<string>;
}

export interface RevisionBuildStatusDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** VCS revision ID */
	revisionId: string;
	/** A unique build identifier (e.g. PROJECT-VERSION-1234) */
	keys: Array<RevisionBuildStatusKeyDTO>;
}

export interface RevisionBuildStatusKeyDTO {
	/** Build status: Success(1), Failed(2), InProgress(3) */
	status: BuildStatusEnum;
	/** Build name (e.g. "#1.0.1000") */
	name?: string;
	/** Build URL (e.g. "http://teamcity-server/build-url") */
	url?: string;
	/** Build description (e.g. "120 of 1500 tests failed") */
	description?: string;
}

export interface RevisionBuildStatusListDTO {
	/** Build status: Success(1), Failed(2), InProgress(3) */
	buildStatus: Array<RevisionBuildStatusDTO>;
}

export interface RevisionChangesRequestDTO {
	/** See RevisionInProjectDTO parameters */
	revision: RevisionInProjectDTO;
	/** ID of the revision to compare with */
	compareToRevisionId?: string;
	/** How many files to return */
	limit: number;
	/** Number of files to skip from the top (for pagination) */
	skip?: number;
}

export interface RevisionDescriptorListDTO {
	/** See RevisionInfoDTO parameters */
	revision: Array<RevisionInfoDTO>;
	/** See RevisionListGraphDTO parameters */
	graph?: RevisionListGraphDTO;
	/** Head revision ID */
	headHash?: string;
	/** Search query */
	query?: string;
}

export interface RevisionDiffItemDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See DiffTypeEnum parameters */
	diffType: DiffTypeEnum;
	/** See FileInRevisionDTO parameters */
	newFile: FileInRevisionDTO;
	/** See FileInRevisionDTO parameters */
	oldFile?: FileInRevisionDTO;
	/** Indicates type of file (e.g. "file:xml") */
	fileIcon?: string;
	/** Whether the diff has been viewed by the user. When returned by the findCommits method, isRead is always set to 'true'. */
	isRead: boolean;
	/** When the diff relates to the merge result, holds the conflict type (see ConflictTypeEnum) */
	conflictType?: ConflictTypeEnum;
}

export interface RevisionDiscussionCountersListDTO {
	/** A discussion counter for a revision (number of discussions) */
	counter: Array<SimpleDiscussionCounterDTO>;
}

export interface RevisionDiscussionCountersRequestDTO {
	/** See RevisionListDTO parameters */
	revisions: RevisionListDTO;
	/** Additional revisions filter */
	fileNameFilter?: string;
}

export interface RevisionExternalInspectionsDiffResponseDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** VCS revision ID */
	revisionId: string;
	/** Files that contain differing inspections */
	files: Array<FileExternalInspectionsDiffResponseDTO>;
}

export interface RevisionIdDTO {
	/** VCS revision ID */
	revisionId: string;
}

export interface RevisionInBranchDTO {
	/** See RevisionInfoDTO parameters */
	revision: RevisionInfoDTO;
	/** Branch name */
	branch?: string;
}

export interface RevisionInProjectDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** VCS revision ID */
	revisionId: string;
}

export interface RevisionInfoDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Upsource revision ID (may differ from VCS revision ID in case of a multi-root project) */
	revisionId: string;
	/** Revision date (author date in case of Git which differentiates author and committer dates) */
	revisionDate: number;
	/** Revision date that agrees with graph topology (this means that child revisions will always have a larger effective date). In case of Git, can be equal to either author or committer date. */
	effectiveRevisionDate: number;
	/** Commit message of the revision */
	revisionCommitMessage: string;
	/** Revision state: none(1), found(2), imported(3) */
	state: RevisionStateEnum;
	/** The VCS revision ID */
	vcsRevisionId: string;
	/** Short revision ID */
	shortRevisionId: string;
	/** User ID of the commit's author */
	authorId: string;
	/** See RevisionReachabilityEnum parameters */
	reachability: RevisionReachabilityEnum;
	/** Revision tags, if any */
	tags: Array<string>;
	/** Branch head labels, if any */
	branchHeadLabel: Array<string>;
	/** List of parent revisions IDs */
	parentRevisionIds: Array<string>;
}

export interface RevisionListDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** IDs of the requested revisions */
	revisionId: Array<string>;
}

export interface RevisionListGraphDTO {
	/** "Width" of a graph, i.e. how many branches running in parallel does it have */
	width: number;
	/** See RevisionListGraphRowDTO parameters */
	rows: Array<RevisionListGraphRowDTO>;
}

export interface RevisionListGraphEdgeDTO {
	/** Edge position index */
	position: number;
	/** Connecting edge position index */
	toPosition: number;
	/** Whether a line is directed up or down */
	isUp: boolean;
	/** Whether a line is solid or dashed */
	isSolid: boolean;
	/** Whether a line ends with an arrow */
	hasArrow: boolean;
	/** Edge color */
	color: number;
}

export interface RevisionListGraphNodeDTO {
	/** Node position index */
	position: number;
	/** Node color */
	color: number;
}

export interface RevisionListGraphRowDTO {
	/** See RevisionListGraphNodeDTO parameters */
	nodes: Array<RevisionListGraphNodeDTO>;
	/** See RevisionListGraphEdgeDTO parameters */
	edges: Array<RevisionListGraphEdgeDTO>;
}

export interface RevisionOwnershipSummaryDTO {
	/** VCS revision ID */
	revisionId: string;
	/** Upsource user ID */
	userId: string;
}

export interface RevisionReviewInfoDTO {
	/** See ShortReviewInfoDTO parameters */
	reviewInfo?: ShortReviewInfoDTO;
}

export interface RevisionReviewInfoListDTO {
	/** See RevisionReviewInfoDTO parameters */
	reviewInfo: Array<RevisionReviewInfoDTO>;
}

export interface RevisionSuggestDTO {
	/** Revision info */
	revisionId: string;
	/** The confidence score */
	score: number;
}

export interface RevisionsDiffDTO {
	/** See RevisionDiffItemDTO parameters */
	diff: Array<RevisionDiffItemDTO>;
}

export interface RevisionsDiffRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the base revision */
	baseRevision: string;
	/** ID of the revision that should be compared to the base revision */
	secondRevision: string;
}

export interface RevisionsExternalInspectionsDiffResponseDTO {
	/** See RevisionExternalInspectionsDiffResponseDTO */
	diff: Array<RevisionExternalInspectionsDiffResponseDTO>;
}

export interface RevisionsInReviewDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** IDs of the revisions attached to the review */
	revisionId: Array<string>;
}

export interface RevisionsInReviewResponseDTO {
	/** See RevisionDescriptorListDTO parameters */
	allRevisions: RevisionDescriptorListDTO;
	/** See RevisionsSetDTO parameters */
	newRevisions: RevisionsSetDTO;
	/** The review contains revisions that are no longer found in VCS (due to a rebase operation, for example) */
	hasMissingRevisions: boolean;
	/** Indicates that revisions could have been squashed, meaning that the review can be squashed as well */
	canSquash: boolean;
	/** An optional field denoting that all revisions in a review are on a same branch */
	branchHint?: string;
	/** An optional field denoting that review can be converted to branch review */
	canTrackBranch?: boolean;
	/** Internal */
	canCherryPickWithTeamCity?: boolean;
}

export interface RevisionsListFilteredRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Search query (e.g. "branch: master") and/or part of the commit message */
	query: string;
	/** Number of revisions to return */
	limit: number;
	/** Number of revisions to skip from the top (for pagination) */
	skip?: number;
	/** Whether revision graph should be returned */
	requestGraph?: boolean;
}

export interface RevisionsListRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Number of revisions to return */
	limit: number;
	/** Number of revisions to skip from the top (for pagination) */
	skip?: number;
	/** Whether revision graph should be returned */
	requestGraph?: boolean;
}

export interface RevisionsListUpdateRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Number of revisions to return */
	limit: number;
	/** Current head revision ID */
	hash?: string;
	/** Additional filter by message (applied as AND) */
	messageSubstring: Array<string>;
}

export interface RevisionsListUpdateResponseDTO {
	/** See RevisionInfoDTO parameters */
	revision: Array<RevisionInfoDTO>;
	/** Current head revision ID */
	hash: string;
}

export interface RevisionsOwnershipSummaryDTO {
	/** See RevisionOwnershipSummaryDTO */
	revisionOwner: Array<RevisionOwnershipSummaryDTO>;
}

export interface RevisionsSetDTO {
	/** IDs of the requested revisions */
	revisions: Array<string>;
	/** Set this to "true" to request all revisions without enumerating them */
	selectAll?: boolean;
}

export interface RoleDTO {
	/** Role key (e.g. project-admin) */
	key: string;
	/** Whether the role is a global one in Hub */
	isGlobal: boolean;
	/** Whether the role is assigned to a group */
	isGroup: boolean;
}

export interface RoleDetailsDTO {
	/** Role ID */
	id: string;
	/** Role key (e.g. project-admin) */
	key: string;
	/** Role name (e.g. Project admin) */
	name: string;
	/** Role description */
	description?: string;
}

export interface SameUsagesDTO {
	/** Old usage of the element. See FindUsagesItemDTO parameters */
	oldUsage: FindUsagesItemDTO;
	/** New usage of the element. See FindUsagesItemDTO parameters */
	newUsage: FindUsagesItemDTO;
}

export interface SanitizeHTMLRequestDTO {
	/** The HTML string to sanitize */
	html: string;
	/** "true" allows only basic HTML markup (text formatting, images, links), "false" additionally allows block-level HTML elements and tables */
	isBasicMarkup: boolean;
}

export interface SanitizeHTMLResponseDTO {
	/** Sanitized HTML string */
	sanitizedHTML: string;
}

export interface SetMottoRequestDTO {
	/** Server motto text (leave empty to remove an existing one) */
	motto?: string;
}

export interface SetProjectSettingRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See SetSettingRequestDTO parameters */
	request: SetSettingRequestDTO;
}

export interface SetSettingRequestDTO {
	/** Setting key */
	key: string;
	/** Setting value */
	value: string;
}

export interface ShortProjectInfoDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Project name */
	projectName: string;
	/** Head revision ID */
	headHash?: string;
	/** Whether project initialization is completed */
	isReady: boolean;
	/** Unix timestamp of the last commit */
	lastCommitDate?: number;
	/** User ID of the last commit's author */
	lastCommitAuthorName?: string;
	/** URL of the project icon */
	iconUrl?: string;
	/** See ProjectGroupDTO parameters */
	group?: ProjectGroupDTO;
	/** Who and when created the project */
	founder?: ProjectFounderDTO;
	/** Number of commits made in the last 24 hours */
	lastDayCommits?: number;
	/** Number of commits made in the last 30 days */
	lastMonthCommits?: number;
	/** Total number of commits in the project */
	totalCommits?: number;
	/** Whether the project is archived */
	isArchived?: boolean;
}

export interface ShortProjectInfoListDTO {
	/** See ShortProjectInfoDTO parameters */
	project: Array<ShortProjectInfoDTO>;
}

export interface ShortReviewInfoDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Review title */
	title: string;
	/** Review state: open(1), closed(2) */
	state: ReviewStateEnum;
	/** Names of tracked branches */
	branch: Array<string>;
	/** See CompletionRateDTO parameters */
	completionRate?: CompletionRateDTO;
	/** Review labels */
	labels: Array<LabelDTO>;
}

export interface SimpleDiscussionCounterDTO {
	/** Total number of discussions */
	count: number;
	/** Contains unresolved discussions */
	hasUnresolved: boolean;
	/** Number of unresolved discussions */
	unresolvedCount: number;
	/** Number of resolved discussions */
	resolvedCount: number;
}

export interface StacktraceDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Stacktrace text to be analyzed */
	stacktrace: string;
	/** VCS revision ID */
	revisionId?: string;
}

export interface StacktracePositionDTO {
	/** Line number that corresponds to the given stacktrace */
	lineNumber: number;
	/** A full path of the file */
	fullPath: string;
	/** Revision ID */
	vcsCommitId?: string;
	/** See RangeDTO parameters */
	interpolatedRange?: RangeDTO;
}

export interface StacktracePositionsDTO {
	/** See StacktracePositionDTO parameters */
	positions: Array<StacktracePositionDTO>;
}

export interface StartBranchTrackingRequestDTO {
	/** Review ID */
	reviewId: ReviewIdDTO;
	/** Branch name to track */
	branch: string;
}

export interface StopBranchTrackingRequestDTO {
	/** Review ID */
	reviewId: ReviewIdDTO;
	/** Branch name to stop tracking. When none specified, tracking of all branches will stop. */
	branch?: string;
}

export interface StubIdDTO {
	/** See FileInRevisionDTO parameters */
	fileId: FileInRevisionDTO;
	/** Stub index ID */
	stubIndex: number;
}

export interface SuggestedReviewListDTO {
	suggest: Array<ReviewSuggestDTO>;
}

export interface SuggestedRevisionListDTO {
	suggest: Array<RevisionSuggestDTO>;
}

export interface TargetDescriptionDTO {
	/** ID of the element's image (if 'image' is none) */
	imageName?: string;
	/** Base62-encoded image (if 'imageName' is none) */
	image?: string;
	/** Text representation of the given element */
	targetPresentation?: string;
	/** Text surrounding the element */
	locationPresentation?: string;
}

export interface TestConnectionRequestDTO {
	/** Project ID */
	projectId?: string;
	/** VCS configuration represented as a JSON-encoded string */
	vcsSettings: string;
}

export interface TestConnectionResponseDTO {
	/** See TestConnectionStatusEnum parameters */
	status: TestConnectionStatusEnum;
	/** Response message */
	message?: string;
}

export interface TestPOP3MailboxRequestDTO {
	/** Protocol type ("POP3", "POP3+SSL", "POP3+TLS") */
	protocol: string;
	/** Email service host name */
	host: string;
	/** Email server port number */
	port: number;
	/** Email login */
	login: string;
	/** Email password */
	password: string;
}

export interface TestPOP3MailboxResponseDTO {
	/** Mailbox status. OK (1); LoginFailed (2); ConnectionFailed (3); */
	status: TestPOP3MailboxStatusEnum;
	/** Optional text message */
	message?: string;
}

export interface TextAttributeDTO {
	/** Foreground color */
	fgColor?: string;
	/** Background color */
	bgColor?: string;
	/** Font style (italic, bold) */
	fontStyle?: string;
	/** Text effect (underline, wave underline, strikeout, etc.) */
	effectStyle?: string;
	/** Effect color */
	effectColor?: string;
	/** Error stripe color */
	errorStripeColor?: string;
}

export interface TextMarkupDTO {
	/** Text range */
	range: RangeDTO;
	/** See TextAttributeDTO parameters */
	textAttribute: TextAttributeDTO;
}

export interface TextSearchItem {
	/** The file in a particular project and revision */
	file: FileInRevisionDTO;
	/** See RevisionInfoDTO parameters */
	revisionInfo: RevisionInfoDTO;
	/** File content type */
	contentType: FileContentTypeDTO;
	/** Whether this file is deleted */
	isDeleted: boolean;
	/** Project details */
	projectDetails: TextSearchProjectDetails;
	/** Code snippets */
	snippets: Array<TextSearchSnippet>;
	/** Total number of matches in the file */
	totalMatches: number;
}

export interface TextSearchProjectDetails {
	/** Holds the project name */
	projectName: string;
}

export interface TextSearchRequestDTO {
	/** Project ID in Upsource */
	projectId?: string;
	/** The search query */
	query: string;
	/** File name filter */
	filenameFilter?: string;
	/** Ignore matches in deleted files */
	ignoreDeleted: boolean;
	/** Whether to search in archived projects */
	ignoreArchived: boolean;
}

export interface TextSearchResponseDTO {
	/** The items that match the search query */
	items: Array<TextSearchItem>;
}

export interface TextSearchSnippet {
	/** Snippet text */
	text: string;
	/** Start line number */
	startLineNumber: number;
	/** Matching range in the snippet */
	rangeInSnippet: RangeDTO;
	/** Matching range in the file */
	rangeInFile: RangeDTO;
}

export interface TimeValue {
	/** Unix timestamp */
	time: number;
	/** The value associated with the timestamp */
	value: number;
}

export interface ToggleReactionRequestDTO {
	/** See ReactionTargetDTO parameters */
	target: ReactionTargetDTO;
	/** ID of the reaction */
	reactionId: string;
	/** Whether to add or remove the reaction */
	doAdd: boolean;
}

export interface ToggleReviewMutedRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** Whether to mute or to unmute */
	doMute: boolean;
}

export interface UncommittedRevisionDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Parent revision ID */
	parentRevisionId: string;
	/** List of modified files (added, deleted, updated) */
	files: Array<string>;
}

export interface UpdateCommentRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** An ID of the discussion being updated */
	discussionId: string;
	/** An ID of the comment being updated */
	commentId: string;
	/** New text of the comment being updated */
	text: string;
	/** Currently not in use */
	markupType?: string;
}

export interface UpdateCommentResponseDTO {
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface UpdateDiscussionFlagRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Discussion ID */
	discussionId: string;
	/** Whether the discussion is flagged (starred) */
	isFlagged: boolean;
}

export interface UpdateDiscussionLabelRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the discussion */
	discussionId: string;
	/** Discussion label being added or removed. See LabelDTO parameters */
	label: LabelDTO;
}

export interface UpdateParticipantInReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** State of the participant. See ParticipantStateEnum parameters */
	state: ParticipantStateEnum;
}

export interface UpdateReviewLabelRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** See ReviewIdDTO parameters */
	reviewId?: ReviewIdDTO;
	/** Review label being added or removed. See LabelDTO parameters */
	label: LabelDTO;
}

export interface UpdateReviewLabelResponseDTO {
	/** The review label */
	label: LabelDTO;
	/** GitHub sync result. see SyncResultEnum parameters */
	syncResult?: SyncResultEnum;
}

export interface UpdateTaskListRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** An ID of the discussion being updated */
	discussionId: string;
	/** An ID of the comment being updated */
	commentId: string;
	/** Index of the task list item being updated */
	itemIndex: number;
	/** New value of the task list item being updated */
	itemValue: boolean;
}

export interface UpdateUserTimezoneDTO {
	/** User ID in Upsource */
	userId: string;
	/** Timezone offset */
	timezoneOffset: number;
}

export interface UsagesDiffByAnotherRevisionRequestDTO {
	/** Original element. See PsiElementIdDTO parameters */
	originElement: PsiElementIdDTO;
	/** ID of the other revision */
	anotherRevisionId: string;
	/** Whether the other revision is older */
	isAnotherOld: boolean;
}

export interface UsagesDiffByBoundaryRevisionsRequestDTO {
	/** Original element. See PsiElementIdDTO parameters */
	originElement: PsiElementIdDTO;
	/** ID of the new revision */
	newRevisionId: string;
	/** ID of the boundary revision */
	boundaryRevisionId: string;
}

export interface UsagesDiffDTO {
	/** See FilePathToRootDTO parameters */
	oldFilePathToRoot?: FilePathToRootDTO;
	/** See FilePathToRootDTO parameters */
	newFilePathToRoot?: FilePathToRootDTO;
	/** See FindUsagesItemDTO parameters */
	removedUsage: Array<FindUsagesItemDTO>;
	/** See SameUsagesDTO parameters */
	sameUsage: Array<SameUsagesDTO>;
	/** See FindUsagesItemDTO parameters */
	addedUsage: Array<FindUsagesItemDTO>;
}

export interface UsagesDiffFullRequestDTO {
	/** Old element. See PsiElementIdDTO parameters */
	oldElement: PsiElementIdDTO;
	/** New element. See PsiElementIdDTO parameters */
	newElement: PsiElementIdDTO;
}

export interface UsagesDiffRequestDTO {
	/** See UsagesDiffFullRequestDTO parameters */
	fullRequest?: UsagesDiffFullRequestDTO;
	/** See UsagesDiffByAnotherRevisionRequestDTO parameters */
	requestByAnotherRevision?: UsagesDiffByAnotherRevisionRequestDTO;
	/** See UsagesDiffByBoundaryRevisionsRequestDTO parameters */
	requestByBoundaryRevisions?: UsagesDiffByBoundaryRevisionsRequestDTO;
}

export interface UsagesDiffResponseDTO {
	/** ID of the old revision */
	oldRevisionId: string;
	/** ID of the new revision */
	newRevisionId: string;
	/** See UsagesDiffDTO parameters */
	usages: Array<UsagesDiffDTO>;
}

export interface UserAbsenceRequestDTO {
	/** Absence end date */
	absentUntil?: number;
	/** User ID in Upsource ("null" denotes current user) */
	userId?: string;
}

export interface UserAchievementsCountDTO {
	count: number;
}

export interface UserAchievementsRequestDTO {
	/** User ID in Upsource */
	userId: string;
}

export interface UserActionNotificationDTO {
	/** User ID in Upsource */
	userId: string;
}

export interface UserActivityDTO {
	/** See TimeValue parameters */
	items: Array<TimeValue>;
	/** See AnalyzerStats parameters */
	stats: AnalyzerStats;
}

export interface UserActivityRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** User activity period. See TimeUnitEnum parameters */
	period: TimeUnitEnum;
	/** Unix timestamp used to calculate the distribution. This timestamp encapsulates the time set on the client and makes the server generate even days, months, etc. for the particular client. */
	referenceTime: number;
	/** User IDs of committers */
	committers: Array<string>;
}

export interface UserAgreementTextDTO {
	text: string;
}

export interface UserGroupDTO {
	/** Group ID */
	id: string;
	/** Group name */
	name: string;
	/** Number of users participating in this group */
	usersCount: number;
}

export interface UserGroupsIdsListDTO {
	/** IDs of user groups */
	ids: Array<string>;
}

export interface UserGroupsListDTO {
	/** List of user groups */
	groups: Array<UserGroupDTO>;
	/** Whether there are more groups by the request beyond the limit specified */
	hasMore: boolean;
}

export interface UserInfoRequestDTO {
	/** A list of user IDs to request the full user info for */
	ids: Array<string>;
}

export interface UserInfoResponseDTO {
	/** See FullUserInfoDTO parameters */
	infos: Array<FullUserInfoDTO>;
}

export interface UserPresenceInfoDTO {
	/** Upsource user ID */
	userId: string;
	/** Whether the user is online */
	isOnline: boolean;
	/** Absence end date, if the user is currently on leave */
	absentUntil?: number;
}

export interface UserProjectInfoDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Unix timestamp of the last commit */
	lastCommitTime: number;
}

export interface UserProjectsRequestDTO {
	/** Upsource user ID */
	userId: string;
	/** Project update timestamp to limit the returned projects by */
	commitTimestampFilter: number;
}

export interface UserProjectsResponseDTO {
	/** See UserProjectInfoDTO parameters */
	projects: Array<UserProjectInfoDTO>;
}

export interface UserPulseRequestDTO {
	/** Upsource user ID */
	userId: string;
	/** Unix timestamp */
	fromTime: number;
	/** Unix timestamp */
	toTime: number;
	/** The specific time intervals that define the distribution (Unix timestamps) */
	timePoints: Array<number>;
}

export interface UserRevisionsListRequestDTO {
	/** ID of the specified Upsource user */
	userId: string;
	/** Number of revisions to return */
	limit: number;
	/** Search query (e.g. "branch: master") and/or part of the commit message */
	query?: string;
}

export interface UserRolesDTO {
	/** ID of the Upsource user */
	userId: string;
	/** See RoleDTO parameters */
	roles: Array<RoleDTO>;
}

export interface UserValue {
	/** Upsource user ID */
	userId: string;
	/** The value associated with the user ID */
	value: number;
}

export interface UsersForMentionRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** ID of the Upsource review */
	reviewId?: string;
	/** ID of the revision */
	revisionId?: string;
	/** A full path to the file starting with a slash (e.g. /directory/file.txt) */
	fileName?: string;
	/** Search query, e.g. part of the name */
	query?: string;
	/** Number of results to return */
	limit: number;
}

export interface UsersForReviewDTO {
	/** Suggested reviewers for a given review */
	result: UsersListDTO;
	/** All relevant users */
	relevantUser: Array<string>;
	/** Users' relevance [0..100] */
	userRelevance: Array<number>;
}

export interface UsersForReviewRequestDTO {
	/** See ReviewIdDTO parameters */
	reviewId: ReviewIdDTO;
	/** See RoleInReviewEnum parameters */
	role: RoleInReviewEnum;
	/** Search query, e.g. part of the name */
	query?: string;
	/** Number of results to return */
	limit: number;
	/** Timeout(ms) to calculate smart users suggestion, by default - 1 minute */
	timeout?: number;
}

export interface UsersListDTO {
	/** User ID of the logged-in user */
	me?: string;
	/** User IDs of suggested users */
	suggestedUsers: Array<string>;
	/** Users' relevance [0..100] as a reviewer */
	suggestedUserRelevance: Array<number>;
	/** The number of open reviews the user has */
	suggestedUserOpenedReviews: Array<number>;
	/** User IDs of suggested committers */
	committers: Array<string>;
	/** User IDs of other suggested participants */
	others: Array<string>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface UsersPresenceInfoResponseDTO {
	/** See UserPresenceInfoDTO parameters */
	presences: Array<UserPresenceInfoDTO>;
}

export interface UsersRolesRequestDTO {
	/** Project ID in Upsource */
	projectId: string;
	/** Paging offset */
	offset: number;
	/** Page size */
	pageSize: number;
	/** Search query */
	query?: string;
}

export interface UsersRolesResponseDTO {
	/** See UserRolesDTO parameters */
	userRoles: Array<UserRolesDTO>;
	/** Whether all available items have been returned or more can be requested by passing the corresponding 'limit' value in the subsequent request */
	hasMore: boolean;
}

export interface VcsHostingRequestDTO {
	/** Project ID in Upsource */
	projectId?: string;
}

export interface VcsHostingResponseDTO {
	/** See VcsHostingServiceDTO parameters */
	service: Array<VcsHostingServiceDTO>;
}

export interface VcsHostingServiceDTO {
	/** VCS hosting service ID */
	serviceId: string;
	/** VCS hosting service URL */
	serviceUrl: string;
	/** IDs of the VCS repositories */
	repoIds: Array<string>;
	/** Whether the requester has permission to create repositories in the VCS service */
	canCreateRepository: boolean;
}

export interface VcsRepoDTO {
	/** Repository ID */
	id: string;
	/** Repository URL */
	url: Array<string>;
}

export interface VcsRepoListDTO {
	/** See VcsRepoDTO parameters */
	repo: Array<VcsRepoDTO>;
}

export interface VoidMessage {
	/** No value required/returned */
	voidField?: number;
}
