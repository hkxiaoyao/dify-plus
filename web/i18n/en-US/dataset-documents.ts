const translation = {
  list: {
    title: 'Documents',
    desc: 'All files of the Knowledge are shown here, and the entire Knowledge can be linked to Dify citations or indexed via the Chat plugin.',
    learnMore: 'Learn more',
    addFile: 'Add file',
    addPages: 'Add Pages',
    addUrl: 'Add URL',
    table: {
      header: {
        fileName: 'NAME',
        chunkingMode: 'CHUNKING MODE',
        words: 'WORDS',
        hitCount: 'RETRIEVAL COUNT',
        uploadTime: 'UPLOAD TIME',
        status: 'STATUS',
        action: 'ACTION',
      },
      rename: 'Rename',
      name: 'Name',
    },
    action: {
      uploadFile: 'Upload new file',
      settings: 'Chunking Settings',
      addButton: 'Add chunk',
      add: 'Add a chunk',
      batchAdd: 'Batch add',
      archive: 'Archive',
      unarchive: 'Unarchive',
      delete: 'Delete',
      enableWarning: 'Archived file cannot be enabled',
      sync: 'Sync',
    },
    index: {
      enable: 'Enable',
      disable: 'Disable',
      all: 'All',
      enableTip: 'The file can be indexed',
      disableTip: 'The file cannot be indexed',
    },
    status: {
      queuing: 'Queuing',
      indexing: 'Indexing',
      paused: 'Paused',
      error: 'Error',
      available: 'Available',
      enabled: 'Enabled',
      disabled: 'Disabled',
      archived: 'Archived',
    },
    empty: {
      title: 'There is no documentation yet',
      upload: {
        tip: 'You can upload files, sync from the website, or from webb apps like Notion, GitHub, etc.',
      },
      sync: {
        tip: 'Dify will periodically download files from your Notion and complete processing.',
      },
    },
    delete: {
      title: 'Are you sure Delete?',
      content: 'If you need to resume processing later, you will continue from where you left off',
    },
    batchModal: {
      title: 'Batch add chunks',
      csvUploadTitle: 'Drag and drop your CSV file here, or ',
      browse: 'browse',
      tip: 'The CSV file must conform to the following structure:',
      question: 'question',
      answer: 'answer',
      contentTitle: 'chunk content',
      content: 'content',
      template: 'Download the template here',
      cancel: 'Cancel',
      run: 'Run Batch',
      runError: 'Run batch failed',
      processing: 'In batch processing',
      completed: 'Import completed',
      error: 'Import Error',
      ok: 'OK',
    },
  },
  metadata: {
    title: 'Metadata',
    desc: 'Labeling metadata for documents allows AI to access them in a timely manner and exposes the source of references for users.',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'Please select a document type',
    docTypeChangeTitle: 'Change document type',
    docTypeSelectWarning:
      'If the document type is changed, the now filled metadata will no longer be preserved',
    firstMetaAction: 'Let\'s go',
    placeholder: {
      add: 'Add ',
      select: 'Select ',
    },
    source: {
      upload_file: 'Upload File',
      notion: 'Sync form Notion',
      github: 'Sync form Github',
    },
    type: {
      book: 'Book',
      webPage: 'Web Page',
      paper: 'Paper',
      socialMediaPost: 'Social Media Post',
      personalDocument: 'Personal Document',
      businessDocument: 'Business Document',
      IMChat: 'IM Chat',
      wikipediaEntry: 'Wikipedia Entry',
      notion: 'Sync form Notion',
      github: 'Sync form Github',
      technicalParameters: 'Technical Parameters',
    },
    field: {
      processRule: {
        processDoc: 'Process Document',
        segmentRule: 'Chunk Rule',
        segmentLength: 'Chunks Length',
        processClean: 'Text Process Clean',
      },
      book: {
        title: 'Title',
        language: 'Language',
        author: 'Author',
        publisher: 'Publisher',
        publicationDate: 'Publication Date',
        ISBN: 'ISBN',
        category: 'Category',
      },
      webPage: {
        title: 'Title',
        url: 'URL',
        language: 'Language',
        authorPublisher: 'Author/Publisher',
        publishDate: 'Publish Date',
        topicsKeywords: 'Topics/Keywords',
        description: 'Description',
      },
      paper: {
        title: 'Title',
        language: 'Language',
        author: 'Author',
        publishDate: 'Publish Date',
        journalConferenceName: 'Journal/Conference Name',
        volumeIssuePage: 'Volume/Issue/Page',
        DOI: 'DOI',
        topicsKeywords: 'Topics/Keywords',
        abstract: 'Abstract',
      },
      socialMediaPost: {
        platform: 'Platform',
        authorUsername: 'Author/Username',
        publishDate: 'Publish Date',
        postURL: 'Post URL',
        topicsTags: 'Topics/Tags',
      },
      personalDocument: {
        title: 'Title',
        author: 'Author',
        creationDate: 'Creation Date',
        lastModifiedDate: 'Last Modified Date',
        documentType: 'Document Type',
        tagsCategory: 'Tags/Category',
      },
      businessDocument: {
        title: 'Title',
        author: 'Author',
        creationDate: 'Creation Date',
        lastModifiedDate: 'Last Modified Date',
        documentType: 'Document Type',
        departmentTeam: 'Department/Team',
      },
      IMChat: {
        chatPlatform: 'Chat Platform',
        chatPartiesGroupName: 'Chat Parties/Group Name',
        participants: 'Participants',
        startDate: 'Start Date',
        endDate: 'End Date',
        topicsKeywords: 'Topics/Keywords',
        fileType: 'File Type',
      },
      wikipediaEntry: {
        title: 'Title',
        language: 'Language',
        webpageURL: 'Webpage URL',
        editorContributor: 'Editor/Contributor',
        lastEditDate: 'Last Edit Date',
        summaryIntroduction: 'Summary/Introduction',
      },
      notion: {
        title: 'Title',
        language: 'Language',
        author: 'Author',
        createdTime: 'Created Time',
        lastModifiedTime: 'Last Modified Time',
        url: 'URL',
        tag: 'Tag',
        description: 'Description',
      },
      github: {
        repoName: 'Repo Name',
        repoDesc: 'Repo Description',
        repoOwner: 'Repo Owner',
        fileName: 'File Name',
        filePath: 'File Path',
        programmingLang: 'Programming Language',
        url: 'URL',
        license: 'License',
        lastCommitTime: 'Last Commit Time',
        lastCommitAuthor: 'Last Commit Author',
      },
      originInfo: {
        originalFilename: 'Original filename',
        originalFileSize: 'Original file size',
        uploadDate: 'Upload date',
        lastUpdateDate: 'Last update date',
        source: 'Source',
      },
      technicalParameters: {
        segmentSpecification: 'Chunks specification',
        segmentLength: 'Chunks length',
        avgParagraphLength: 'Avg. paragraph length',
        paragraphs: 'Paragraphs',
        hitCount: 'Retrieval count',
        embeddingTime: 'Embedding time',
        embeddedSpend: 'Embedded spend',
      },
    },
    languageMap: {
      zh: 'Chinese',
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German',
      ja: 'Japanese',
      ko: 'Korean',
      ru: 'Russian',
      ar: 'Arabic',
      pt: 'Portuguese',
      it: 'Italian',
      nl: 'Dutch',
      pl: 'Polish',
      sv: 'Swedish',
      tr: 'Turkish',
      he: 'Hebrew',
      hi: 'Hindi',
      da: 'Danish',
      fi: 'Finnish',
      no: 'Norwegian',
      hu: 'Hungarian',
      el: 'Greek',
      cs: 'Czech',
      th: 'Thai',
      id: 'Indonesian',
    },
    categoryMap: {
      book: {
        fiction: 'Fiction',
        biography: 'Biography',
        history: 'History',
        science: 'Science',
        technology: 'Technology',
        education: 'Education',
        philosophy: 'Philosophy',
        religion: 'Religion',
        socialSciences: 'SocialSciences',
        art: 'Art',
        travel: 'Travel',
        health: 'Health',
        selfHelp: 'SelfHelp',
        businessEconomics: 'BusinessEconomics',
        cooking: 'Cooking',
        childrenYoungAdults: 'ChildrenYoungAdults',
        comicsGraphicNovels: 'ComicsGraphicNovels',
        poetry: 'Poetry',
        drama: 'Drama',
        other: 'Other',
      },
      personalDoc: {
        notes: 'Notes',
        blogDraft: 'Blog Draft',
        diary: 'Diary',
        researchReport: 'Research Report',
        bookExcerpt: 'Book Excerpt',
        schedule: 'Schedule',
        list: 'List',
        projectOverview: 'Project Overview',
        photoCollection: 'Photo Collection',
        creativeWriting: 'Creative Writing',
        codeSnippet: 'Code Snippet',
        designDraft: 'Design Draft',
        personalResume: 'Personal Resume',
        other: 'Other',
      },
      businessDoc: {
        meetingMinutes: 'Meeting Minutes',
        researchReport: 'Research Report',
        proposal: 'Proposal',
        employeeHandbook: 'Employee Handbook',
        trainingMaterials: 'Training Materials',
        requirementsDocument: 'Requirements Document',
        designDocument: 'Design Document',
        productSpecification: 'Product Specification',
        financialReport: 'Financial Report',
        marketAnalysis: 'Market Analysis',
        projectPlan: 'Project Plan',
        teamStructure: 'Team Structure',
        policiesProcedures: 'Policies & Procedures',
        contractsAgreements: 'Contracts & Agreements',
        emailCorrespondence: 'Email Correspondence',
        other: 'Other',
      },
    },
  },
  embedding: {
    processing: 'Embedding processing...',
    paused: 'Embedding paused',
    completed: 'Embedding completed',
    error: 'Embedding error',
    docName: 'Preprocessing document',
    mode: 'Chunking Setting',
    segmentLength: 'Maximum Chunk Length',
    textCleaning: 'Text Preprocessing Rules',
    segments: 'Paragraphs',
    highQuality: 'High-quality mode',
    economy: 'Economy mode',
    estimate: 'Estimated consumption',
    stop: 'Stop processing',
    pause: 'Pause',
    resume: 'Resume',
    automatic: 'Automatic',
    custom: 'Custom',
    hierarchical: 'Parent-child',
    previewTip: 'Paragraph preview will be available after embedding is complete',
    parentMaxTokens: 'Parent',
    childMaxTokens: 'Child',
  },
  segment: {
    paragraphs: 'Paragraphs',
    chunks_one: 'CHUNK',
    chunks_other: 'CHUNKS',
    parentChunks_one: 'PARENT CHUNK',
    parentChunks_other: 'PARENT CHUNKS',
    childChunks_one: 'CHILD CHUNK',
    childChunks_other: 'CHILD CHUNKS',
    searchResults_zero: 'RESULT',
    searchResults_one: 'RESULT',
    searchResults_other: 'RESULTS',
    empty: 'No Chunk found',
    clearFilter: 'Clear filter',
    chunk: 'Chunk',
    parentChunk: 'Parent-Chunk',
    newChunk: 'New Chunk',
    childChunk: 'Child-Chunk',
    newChildChunk: 'New Child Chunk',
    keywords: 'KEYWORDS',
    addKeyWord: 'Add keyword',
    keywordError: 'The maximum length of keyword is 20',
    characters_one: 'character',
    characters_other: 'characters',
    hitCount: 'Retrieval count',
    vectorHash: 'Vector hash: ',
    questionPlaceholder: 'Add question here',
    questionEmpty: 'Question can not be empty',
    answerPlaceholder: 'Add answer here',
    answerEmpty: 'Answer can not be empty',
    contentPlaceholder: 'Add content here',
    contentEmpty: 'Content can not be empty',
    newTextSegment: 'New Text Segment',
    newQaSegment: 'New Q&A Segment',
    addChunk: 'Add Chunk',
    addChildChunk: 'Add Child Chunk',
    addAnother: 'Add another',
    delete: 'Delete this chunk ?',
    chunkAdded: '1 chunk added',
    childChunkAdded: '1 child chunk added',
    editChunk: 'Edit Chunk',
    editParentChunk: 'Edit Parent Chunk',
    editChildChunk: 'Edit Child Chunk',
    chunkDetail: 'Chunk Detail',
    regenerationConfirmTitle: 'Do you want to regenerate child chunks?',
    regenerationConfirmMessage: 'Regenerating child chunks will overwrite the current child chunks, including edited chunks and newly added chunks. The regeneration cannot be undone.',
    regeneratingTitle: 'Regenerating child chunks',
    regeneratingMessage: 'This may take a moment, please wait...',
    regenerationSuccessTitle: 'Regeneration completed',
    regenerationSuccessMessage: 'You can close this window.',
    edited: 'EDITED',
    editedAt: 'Edited at',
    expandChunks: 'Expand chunks',
    collapseChunks: 'Collapse chunks',
  },
}

export default translation
