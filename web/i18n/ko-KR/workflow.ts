const translation = {
  common: {
    editing: '편집 중',
    autoSaved: '자동 저장됨',
    unpublished: '미게시',
    published: '게시됨',
    publish: '게시',
    update: '업데이트',
    run: '실행',
    running: '실행 중',
    inRunMode: '실행 모드',
    inPreview: '미리보기 중',
    inPreviewMode: '미리보기 모드',
    preview: '미리보기',
    viewRunHistory: '실행 기록 보기',
    runHistory: '실행 기록',
    goBackToEdit: '편집으로 돌아가기',
    conversationLog: '대화 로그',
    features: '기능',
    debugAndPreview: '디버그 및 미리보기',
    restart: '재시작',
    currentDraft: '현재 초안',
    currentDraftUnpublished: '현재 초안 (게시되지 않음)',
    latestPublished: '최신 게시됨',
    publishedAt: '게시 시간',
    restore: '복원',
    runApp: '앱 실행',
    batchRunApp: '일괄 실행 앱',
    accessAPIReference: 'API 참조에 액세스',
    embedIntoSite: '사이트에 포함',
    addTitle: '제목 추가...',
    addDescription: '설명 추가...',
    noVar: '변수 없음',
    searchVar: '변수 검색',
    variableNamePlaceholder: '변수명',
    setVarValuePlaceholder: '변수 값 설정',
    needConnecttip: '이 단계에는 연결된 항목이 없습니다',
    maxTreeDepth: '각 브랜치 당 최대 {{depth}} 노드 제한',
    needEndNode: '종료 블록을 추가해야 합니다',
    needAnswerNode: '응답 블록을 추가해야 합니다',
    workflowProcess: '워크플로우 처리',
    notRunning: '아직 실행되지 않음',
    previewPlaceholder: '챗봇 디버깅을 시작하려면 아래 상자에 내용을 입력하세요',
    effectVarConfirm: {
      title: '변수 삭제',
      content: '다른 노드에서 변수를 사용하고 있습니다. 그래도 삭제하시겠습니까?',
    },
    insertVarTip: '빠른 삽입을 위해 \'/\' 키를 누르세요',
    processData: '데이터 처리',
    input: '입력',
    output: '출력',
    enableJinja: 'Jinja 템플릿 지원 활성화',
    learnMore: '더 알아보기',
    jinjaEditorPlaceholder: '\'/\' 또는 \'{\'를 입력하여 변수를 삽입하세요.',
    viewOnly: '보기 모드',
    showRunHistory: '실행 기록 보기',
    copy: '복사',
    duplicate: '복제',
    addBlock: '블록 추가',
    pasteHere: '여기에 붙여넣기',
    pointerMode: '선택 모드',
    handMode: '시점 모드',
  },
  errorMsg: {
    fieldRequired: '{{field}}은(는) 필수입니다',
    authRequired: '인증이 필요합니다',
    invalidJson: '{{field}}이(가) 유효하지 않습니다',
    fields: {
      variable: '변수명',
      variableValue: '변수 값',
      code: '코드',
      model: '모델',
      rerankModel: '재순위 모델',
    },
    invalidVariable: '유효하지 않은 변수',
  },
  singleRun: {
    testRun: '테스트 실행',
    startRun: '실행 시작',
    running: '실행 중',
  },
  tabs: {
    'searchBlock': '블록 검색',
    'blocks': '블록',
    'builtInTool': '내장 도구',
    'customTool': '커스텀 도구',
    'question-understand': '질문 이해',
    'logic': '논리',
    'transform': '변환',
    'utilities': '유틸리티',
    'noResult': '일치하는 결과 없음',
  },
  blocks: {
    'start': '시작',
    'end': '끝',
    'answer': '답변',
    'llm': 'LLM',
    'knowledge-retrieval': '지식 검색',
    'question-classifier': '질문 분류기',
    'if-else': 'IF/ELSE',
    'code': '코드',
    'template-transform': '템플릿',
    'http-request': 'HTTP 요청',
    'variable-assigner': '변수 할당기',
  },
  blocksAbout: {
    'start': '워크플로우 시작을 위한 매개변수를 정의합니다',
    'end': '워크플로우 종료 및 결과 유형을 정의합니다',
    'answer': '채팅 대화의 응답 내용을 정의합니다',
    'llm': '대규모 언어 모델을 호출하여 질문에 답변하거나 자연어를 처리합니다',
    'knowledge-retrieval': '사용자의 질문과 관련된 텍스트 콘텐츠를 지식에서 쿼리할 수 있도록 합니다',
    'question-classifier': '사용자의 질문 분류 조건을 정의하고, LLM은 분류 기술에 따라 대화가 어떻게 진행될지 정의할 수 있습니다',
    'if-else': 'IF/ELSE 조건에 따라 워크플로우를 두 가지 분기로 나눌 수 있습니다',
    'code': '사용자 정의 로직을 구현하기 위해 Python 또는 NodeJS 코드를 실행합니다',
    'template-transform': 'Jinja 템플릿 구문을 사용하여 데이터를 문자열로 변환합니다',
    'http-request': 'HTTP 프로토콜을 통해 서버 요청을 보낼 수 있습니다',
    'variable-assigner': '다른 분기에서 동일한 변수에 변수를 할당하여 후속 노드의 통일된 구성을 달성할 수 있습니다',
  },
  operator: {
    zoomIn: '확대',
    zoomOut: '축소',
    zoomTo50: '50%로 확대',
    zoomTo100: '100%로 확대',
    zoomToFit: '적합하게 확대',
  },
  panel: {
    userInputField: '사용자 입력 필드',
    changeBlock: '블록 변경',
    helpLink: '도움말 링크',
    about: '정보',
    createdBy: '작성자',
    nextStep: '다음 단계',
    addNextStep: '이 워크플로우에 다음 블록 추가',
    selectNextStep: '다음 블록 선택',
    runThisStep: '이 단계 실행',
    checklist: '체크리스트',
    checklistTip: '게시하기 전에 모든 문제가 해결되었는지 확인하세요',
    checklistResolved: '모든 문제가 해결되었습니다',
    organizeBlocks: '블록 정리',
    change: '변경',
  },
  nodes: {
    common: {
      outputVars: '출력 변수',
      insertVarTip: '변수 삽입',
      memory: {
        memory: '메모리',
        memoryTip: '채팅 메모리 설정',
        windowSize: '윈도우 크기',
        conversationRoleName: '대화 역할 이름',
        user: '사용자 접두사',
        assistant: '어시스턴트 접두사',
      },
      memories: {
        title: '메모리',
        tip: '채팅 메모리',
        builtIn: '내장',
      },
    },
    start: {
      required: '필수',
      inputField: '입력 필드',
      builtInVar: '내장 변수',
      outputVars: {
        query: '사용자 입력',
        memories: {
          des: '대화 기록',
          type: '메시지 유형',
          content: '메시지 내용',
        },
        files: '파일 목록',
      },
      noVarTip: '워크플로우에서 사용할 수 있는 입력을 설정합니다',
    },
    end: {
      outputs: '출력',
      output: {
        type: '출력 유형',
        variable: '출력 변수',
      },
      type: {
        'none': '없음',
        'plain-text': '평문',
        'structured': '구조화',
      },
    },
    answer: {
      answer: '답변',
      outputVars: '출력 변수',
    },
    llm: {
      model: '모델',
      variables: '변수',
      context: '컨텍스트',
      contextTooltip: '컨텍스트로 지식을 가져올 수 있습니다',
      notSetContextInPromptTip: '컨텍스트 기능을 활성화하려면 PROMPT에 컨텍스트 변수를 입력하세요.',
      prompt: '프롬프트',
      roleDescription: {
        system: '대화의 고수준 명령을 제공합니다',
        user: '모델에 대한 지시, 쿼리 또는 텍스트 기반 입력을 제공합니다',
        assistant: '사용자 메시지를 기반으로 모델의 응답을 생성합니다',
      },
      addMessage: '메시지 추가',
      vision: '비전',
      files: '파일',
      resolution: {
        name: '해상도',
        high: '높음',
        low: '낮음',
      },
      outputVars: {
        output: '컨텐츠 생성',
        usage: '모델 사용 정보',
      },
      singleRun: {
        variable: '변수',
      },
      sysQueryInUser: '사용자 메시지에 sys.query가 요구됩니다.',
    },
    knowledgeRetrieval: {
      queryVariable: '쿼리 변수',
      knowledge: '지식',
      outputVars: {
        output: '검색된 세그먼트화된 데이터',
        content: '세그먼트화된 콘텐츠',
        title: '세그먼트화된 제목',
        icon: '세그먼트화된 아이콘',
        url: '세그먼트화된 URL',
        metadata: '기타 메타데이터',
      },
    },
    http: {
      inputVars: '입력 변수',
      api: 'API',
      apiPlaceholder: 'URL 입력, \'/\'을 입력하여 변수 삽입',
      notStartWithHttp: 'API는 http:// 또는 https://로 시작해야 합니다',
      key: '키',
      value: '값',
      bulkEdit: '일괄 수정',
      keyValueEdit: '키-값 수정',
      headers: '헤더',
      params: '파라미터',
      body: '바디',
      outputVars: {
        body: '응답 콘텐츠',
        statusCode: '응답 상태 코드',
        headers: '응답 헤더 목록 JSON',
        files: '파일 목록',
      },
      authorization: {
        'authorization': '인증',
        'authorizationType': '인증 유형',
        'no-auth': '없음',
        'api-key': 'API 키',
        'auth-type': '인증 유형',
        'basic': '기본',
        'bearer': 'Bearer',
        'custom': '사용자 정의',
        'api-key-title': 'API 키',
        'header': '헤더',
      },
      insertVarPlaceholder: '변수 삽입을 위해 \'/\'를 입력하세요',
      timeout: {
        title: '타임아웃',
        connectLabel: '연결 타임아웃',
        connectPlaceholder: '연결 타임아웃을 초 단위로 입력하세요',
        readLabel: '읽기 타임아웃',
        readPlaceholder: '읽기 타임아웃을 초 단위로 입력하세요',
        writeLabel: '쓰기 타임아웃',
        writePlaceholder: '쓰기 타임아웃을 초 단위로 입력하세요',
      },
    },
    code: {
      inputVars: '입력 변수',
      outputVars: '출력 변수',
      advancedDependencies: '고급 종속성',
      advancedDependenciesTip: '소비하는 데 시간이 더 걸리거나 기본 내장되지 않은 일부 사전 로드된 종속성을 추가하십시오',
      searchDependencies: '종속성 검색',
    },
    templateTransform: {
      inputVars: '입력 변수',
      code: '코드',
      codeSupportTip: 'Jinja2만 지원됩니다',
      outputVars: {
        output: '변환된 콘텐츠',
      },
    },
    ifElse: {
      if: '만약',
      else: '그렇지 않으면',
      elseDescription: 'IF 조건이 충족되지 않을 경우 실행할 로직을 정의합니다.',
      and: '그리고',
      or: '또는',
      operator: '연산자',
      notSetVariable: '먼저 변수를 설정하세요',
      comparisonOperator: {
        'contains': '포함',
        'not contains': '미포함',
        'start with': '시작하는',
        'end with': '끝나는',
        'is': '일치',
        'is not': '불일치',
        'empty': '빈 값',
        'not empty': '빈 값이 아님',
        'null': 'null',
        'not null': 'null이 아님',
      },
      enterValue: '값을 입력하세요',
      addCondition: '조건 추가',
      conditionNotSetup: '조건이 설정되지 않았습니다',
    },
    variableAssigner: {
      title: '변수 할당',
      outputType: '출력 유형',
      outputVarType: '출력 변수 유형',
      varNotSet: '변수가 설정되지 않았습니다',
      noVarTip: '할당할 변수를 추가하세요',
      type: {
        string: '문자열',
        number: '숫자',
        object: '객체',
        array: '배열',
      },
      outputVars: {
        output: '할당된 변수의 값',
      },
    },
    tool: {
      toAuthorize: '승인하려면',
      inputVars: '입력 변수',
      outputVars: {
        text: '툴이 생성한 콘텐츠',
        files: {
          title: '툴이 생성한 파일',
          type: '지원 유형: 현재 이미지만 지원됩니다',
          transfer_method: '전송 방법: remote_url 또는 local_file 값',
          url: '이미지 URL',
          upload_file_id: '업로드 파일 ID',
        },
      },
    },
    questionClassifiers: {
      model: '모델',
      inputVars: '입력 변수',
      outputVars: {
        className: '클래스 이름',
      },
      class: '클래스',
      classNamePlaceholder: '클래스 이름을 입력하세요',
      advancedSetting: '고급 설정',
      topicName: '주제명',
      topicPlaceholder: '주제명을 입력하세요',
      addClass: '클래스 추가',
      instruction: '지시',
      instructionPlaceholder: '지시를 입력하세요',
    },
  },
  tracing: {
    stopBy: '{{user}}에 의해 중지됨',
  },
}

export default translation
