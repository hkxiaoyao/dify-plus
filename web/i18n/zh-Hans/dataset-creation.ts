const translation = {
  steps: {
    header: {
      creation: '创建知识库',
      update: '上传文件',
    },
    one: '选择数据源',
    two: '文本分段与清洗',
    three: '处理并完成',
  },
  error: {
    unavailable: '该知识库不可用',
  },
  firecrawl: {
    configFirecrawl: '配置 🔥Firecrawl',
    apiKeyPlaceholder: '从 firecrawl.dev 获取 API Key',
    getApiKeyLinkText: '从 firecrawl.dev 获取您的 API Key',
  },
  jinaReader: {
    configJinaReader: '配置 Jina Reader',
    apiKeyPlaceholder: '从 jina.ai 获取 API Key',
    getApiKeyLinkText: '从 jina.ai 获取您的免费 API Key',
  },
  stepOne: {
    filePreview: '文件预览',
    pagePreview: '页面预览',
    dataSourceType: {
      file: '导入已有文本',
      notion: '同步自 Notion 内容',
      web: '同步自 Web 站点',
    },
    uploader: {
      title: '上传文本文件',
      button: '拖拽文件至此，或者',
      browse: '选择文件',
      tip: '已支持 {{supportTypes}}，每个文件不超过 {{size}}MB。',
      validation: {
        typeError: '文件类型不支持',
        size: '文件太大了，不能超过 {{size}}MB',
        count: '暂不支持多个文件',
        filesNumber: '批量上传限制 {{filesNumber}}。',
      },
      cancel: '取消',
      change: '更改文件',
      failed: '上传失败',
    },
    notionSyncTitle: 'Notion 未绑定',
    notionSyncTip: '同步 Notion 内容前，须先绑定 Notion 空间',
    connect: '去绑定',
    cancel: '取消',
    button: '下一步',
    emptyDatasetCreation: '创建一个空知识库',
    modal: {
      title: '创建空知识库',
      tip: '空知识库中还没有文档，你可以在今后任何时候上传文档至该知识库。',
      input: '知识库名称',
      placeholder: '请输入知识库名称',
      nameNotEmpty: '名称不能为空',
      nameLengthInvalid: '名称长度不能超过 40 个字符',
      cancelButton: '取消',
      confirmButton: '创建',
      failed: '创建失败',
    },
    website: {
      chooseProvider: '选择工具',
      fireCrawlNotConfigured: 'Firecrawl 未配置',
      fireCrawlNotConfiguredDescription: '请配置 Firecrawl 的 API 密钥以使用它。',
      jinaReaderNotConfigured: 'Jina Reader 未配置',
      jinaReaderNotConfiguredDescription: '请配置 Jina Reader 的免费 API 密钥以访问它。',
      configure: '配置',
      run: '运行',
      firecrawlTitle: '使用 🔥Firecrawl 提取网页内容',
      firecrawlDoc: 'Firecrawl 文档',
      firecrawlDocLink: 'https://docs.dify.ai/v/zh-hans/guides/knowledge-base/sync-from-website',
      jinaReaderTitle: '将整个站点内容转换为 Markdown 格式',
      jinaReaderDoc: '了解更多关于 Jina Reader',
      jinaReaderDocLink: 'https://jina.ai/reader',
      useSitemap: '使用 sitemap',
      useSitemapTooltip: '根据 sitemap 爬取站点。否则，Jina Reader 将基于页面相关性迭代爬取，抓取较少的页面，但质量更高。',
      options: '选项',
      crawlSubPage: '爬取子页面',
      limit: '限制数量',
      maxDepth: '最大深度',
      excludePaths: '排除路径',
      includeOnlyPaths: '仅包含路径',
      extractOnlyMainContent: '仅提取主要内容（无标题、导航、页脚等）',
      exceptionErrorTitle: '运行时发生异常:',
      unknownError: '未知错误',
      totalPageScraped: '抓取页面总数:',
      selectAll: '全选',
      resetAll: '重置全部',
      scrapTimeInfo: '总共在 {{time}}秒 内抓取了 {{total}} 个页面',
      preview: '预览',
      maxDepthTooltip: '相对于输入 URL 的最大抓取深度。深度0仅抓取输入 URL 本身的页面，深度1抓取输入 URL 及其后的一层目录（一个 /），依此类推。',
    },
  },
  stepTwo: {
    segmentation: '分段设置',
    auto: '自动分段与清洗',
    autoDescription: '自动设置分段规则与预处理规则，如果不了解这些参数建议选择此项',
    custom: '自定义',
    customDescription: '自定义分段规则、分段长度以及预处理规则等参数',
    general: '通用',
    generalTip: '通用文本分块模式，检索和召回的块是相同的',
    parentChild: '父子分段',
    parentChildTip: '使用父子模式时，子块用于检索，父块用作上下文',
    parentChunkForContext: '父块用作上下文',
    childChunkForRetrieval: '子块用于检索',
    paragraph: '段落',
    paragraphTip: '此模式根据分隔符和最大块长度将文本拆分为段落，使用拆分文本作为检索的父块',
    fullDoc: '全文',
    fullDocTip: '整个文档用作父块并直接检索。请注意，出于性能原因，超过10000个标记的文本将被自动截断。',
    separator: '分段标识符',
    separatorTip: '分隔符是用于分隔文本的字符。\\n\\n 和 \\n 是常用于分隔段落和行的分隔符。用逗号连接分隔符（\\n\\n,\\n），当段落超过最大块长度时，会按行进行分割。你也可以使用自定义的特殊分隔符（例如 ***）。',
    separatorPlaceholder: '\\n\\n 用于分段；\\n 用于分行',
    maxLength: '分段最大长度',
    maxLengthCheck: '分段最大长度不能大于 {{limit}}',
    overlap: '分段重叠长度',
    overlapTip: '设置分段之间的重叠长度可以保留分段之间的语义关系，提升召回效果。建议设置为最大分段长度的10%-25%',
    overlapCheck: '分段重叠长度不能大于分段最大长度',
    rules: '文本预处理规则',
    removeExtraSpaces: '替换掉连续的空格、换行符和制表符',
    removeUrlEmails: '删除所有 URL 和电子邮件地址',
    removeStopwords: '去除停用词，例如 “a”，“an”，“the” 等',
    preview: '预览',
    previewChunk: '预览块',
    reset: '重置',
    indexMode: '索引方式',
    qualified: '高质量',
    highQualityTip: '使用高质量模式进行嵌入后，无法切换回经济模式。',
    recommend: '推荐',
    qualifiedTip: '调用嵌入模型处理文档以实现更精确的检索，可以帮助LLM生成高质量的答案。',
    warning: '请先完成模型供应商的 API KEY 设置。.',
    click: '前往设置',
    economical: '经济',
    economicalTip: '每个数据块使用10个关键词进行检索，不会消耗任何tokens，但会以降低检索准确性为代价。',
    QATitle: '采用 Q&A 分段模式',
    QATip: '开启后将会消耗额外的 token',
    QALanguage: '分段使用',
    useQALanguage: '使用 Q&A 分段，语言',
    estimateCost: '执行嵌入预估消耗',
    estimateSegment: '预估分段数',
    segmentCount: '段',
    calculating: '计算中...',
    fileSource: '预处理文档',
    notionSource: '预处理页面',
    websiteSource: '预处理页面',
    other: '和其他 ',
    fileUnit: ' 个文件',
    notionUnit: ' 个页面',
    webpageUnit: ' 个页面',
    previousStep: '上一步',
    nextStep: '保存并处理',
    save: '保存并处理',
    cancel: '取消',
    sideTipTitle: '为什么要分段和预处理？',
    sideTipP1: '在处理文本数据时，分段和清洗是两个重要的预处理步骤。',
    sideTipP2: '分段的目的是将长文本拆分成较小的段落，以便模型更有效地处理和理解。这有助于提高模型生成的结果的质量和相关性。',
    sideTipP3: '清洗则是对文本进行预处理，删除不必要的字符、符号或格式，使知识库更加干净、整洁，便于模型解析。',
    sideTipP4: '通过对知识库进行适当的分段和清洗，可以提高模型在实际应用中的表现，从而为用户提供更准确、更有价值的结果。',
    previewTitle: '分段预览',
    previewTitleButton: '预览',
    previewButton: '切换至 Q&A 形式',
    previewSwitchTipStart: '当前分段预览是文本模式，切换到 Q&A 模式将会',
    previewSwitchTipEnd: '消耗额外的 token',
    characters: '字符',
    indexSettingTip: '要更改索引方法和 embedding 模型，请转到',
    retrievalSettingTip: '要更改检索方法，请转到',
    datasetSettingLink: '知识库设置。',
    previewChunkTip: '点击左侧的“预览块”按钮来加载预览',
    previewChunkCount: '{{count}} 预估块',
    switch: '切换',
    qaSwitchHighQualityTipTitle: 'Q&A 格式需要高质量的索引方法',
    qaSwitchHighQualityTipContent: '目前，只有高质量的索引方法支持 Q&A 格式分块。您要切换到高质量模式吗？',
    notAvailableForParentChild: '不支持父子索引',
    notAvailableForQA: '不支持 Q&A 索引',
    parentChildDelimiterTip: '文本分隔符是用于分隔文本的字符。建议用 \n\n 将原始文档划分为较大的父级片段。您也可以自定义特殊分隔符。',
    parentChildChunkDelimiterTip: '文本分隔符是用于分隔文本的字符。建议使用 \n 将父级片段拆分为较小的子级片段。您也可以自定义特殊分隔符。',
  },
  stepThree: {
    creationTitle: '🎉 知识库已创建',
    creationContent: '我们自动为该知识库起了个名称，您也可以随时修改',
    label: '知识库名称',
    additionTitle: '🎉 文档已上传',
    additionP1: '文档已上传至知识库：',
    additionP2: '，你可以在知识库的文档列表中找到它。',
    stop: '停止处理',
    resume: '恢复处理',
    navTo: '前往文档',
    sideTipTitle: '接下来做什么',
    sideTipContent: '当文档完成索引处理后，知识库即可集成至应用内作为上下文使用，你可以在提示词编排页找到上下文设置。你也可以创建成可独立使用的 ChatGPT 索引插件发布。',
    modelTitle: '确认停止索引过程吗？',
    modelContent: '如果您需要稍后恢复处理，则从停止处继续。',
    modelButtonConfirm: '确认停止',
    modelButtonCancel: '取消',
  },
  otherDataSource: {
    title: '连接到其他数据源？',
    description: '目前，Dify 的知识库只有有限的数据源。向 Dify 知识库贡献数据源是帮助所有用户增强平台灵活性和强大功能的绝佳方式。我们的贡献指南使入门变得容易。请点击下面的链接了解更多信息。',
    learnMore: '了解更多信息',
  },
}

export default translation
