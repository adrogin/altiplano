declare class ALParser {
    static grammarFileName: string;
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: (string | null)[];
    symbolicNames: (string | null)[];
    sempred(localctx: any, ruleIndex: any, predIndex: any): any;
    primaryExpression_sempred(localctx: any, predIndex: any): any;
    compilationUnit(): CompilationUnitContext;
    state: number | undefined;
    dataTypeName(): DataTypeNameContext;
    objectTypeName(): ObjectTypeNameContext;
    objectDefinitionKeyword(): ObjectDefinitionKeywordContext;
    tablePropertyName(): TablePropertyNameContext;
    pagePropertyName(): PagePropertyNameContext;
    otherPropertyName(): OtherPropertyNameContext;
    accessModifier(): AccessModifierContext;
    identifierWithNamespace(): IdentifierWithNamespaceContext;
    identifier(): IdentifierContext;
    namespacePrefix(): NamespacePrefixContext;
    genericObjectProperty(): GenericObjectPropertyContext;
    namespaceDeclaration(): NamespaceDeclarationContext;
    usingRefList(): UsingRefListContext;
    usingReference(): UsingReferenceContext;
    namespaceName(): NamespaceNameContext;
    objectPermissionsList(): ObjectPermissionsListContext;
    permissionsPropertyValue(): PermissionsPropertyValueContext;
    objectDefinition(): ObjectDefinitionContext;
    objectReference(): ObjectReferenceContext;
    tableObject(): TableObjectContext;
    tablePropertiesList(): TablePropertiesListContext;
    tablePropertyItem(): TablePropertyItemContext;
    tableProperty(): TablePropertyContext;
    tableFieldsList(): TableFieldsListContext;
    tableFieldDefinition(): TableFieldDefinitionContext;
    tableFieldPropertiesList(): TableFieldPropertiesListContext;
    tableFieldPropertyItem(): TableFieldPropertyItemContext;
    tableFieldProperty(): TableFieldPropertyContext;
    identifiersList(): IdentifiersListContext;
    decimalPlacesPropValue(): DecimalPlacesPropValueContext;
    accessByPermissionProperty(): AccessByPermissionPropertyContext;
    tableRelationExpression(): TableRelationExpressionContext;
    tableRelationIfExpression(): TableRelationIfExpressionContext;
    tableRelationWhereExpression(): TableRelationWhereExpressionContext;
    tableRelationEqualityExpression(): TableRelationEqualityExpressionContext;
    tableRelationReference(): TableRelationReferenceContext;
    tableRelationConstReference(): TableRelationConstReferenceContext;
    tableRelationFilter(): TableRelationFilterContext;
    relationFilterExpression(): RelationFilterExpressionContext;
    tableRelationFieldReference(): TableRelationFieldReferenceContext;
    calcFormulaExpression(): CalcFormulaExpressionContext;
    tableFieldReference(): TableFieldReferenceContext;
    tableKeysSection(): TableKeysSectionContext;
    keyList(): KeyListContext;
    keyItem(): KeyItemContext;
    keyPropertiesList(): KeyPropertiesListContext;
    keyPropertyItem(): KeyPropertyItemContext;
    keyProperty(): KeyPropertyContext;
    fieldGroupsList(): FieldGroupsListContext;
    fieldGroupItem(): FieldGroupItemContext;
    fieldGroupDefinition(): FieldGroupDefinitionContext;
    fieldGroupFieldsList(): FieldGroupFieldsListContext;
    variableDeclaration(): VariableDeclarationContext;
    variablesList(): VariablesListContext;
    variableAttributesList(): VariableAttributesListContext;
    variableAttribute(): VariableAttributeContext;
    triggersList(): TriggersListContext;
    triggerDefinition(): TriggerDefinitionContext;
    proceduresList(): ProceduresListContext;
    procedureDefinition(): ProcedureDefinitionContext;
    procedureAttributesList(): ProcedureAttributesListContext;
    procedureAttribute(): ProcedureAttributeContext;
    procedureAccessModifier(): ProcedureAccessModifierContext;
    procedureReturnType(): ProcedureReturnTypeContext;
    parameterList(): ParameterListContext;
    parameter(): ParameterContext;
    dataType(): DataTypeContext;
    arrayDataType(): ArrayDataTypeContext;
    codeDataType(): CodeDataTypeContext;
    codeunitDataType(): CodeunitDataTypeContext;
    dictionaryDataType(): DictionaryDataTypeContext;
    dotNetDataType(): DotNetDataTypeContext;
    enumDataType(): EnumDataTypeContext;
    interfaceDataType(): InterfaceDataTypeContext;
    labelDataType(): LabelDataTypeContext;
    listDataType(): ListDataTypeContext;
    optionDataType(): OptionDataTypeContext;
    pageDataType(): PageDataTypeContext;
    queryDataType(): QueryDataTypeContext;
    recordDataType(): RecordDataTypeContext;
    reportDataType(): ReportDataTypeContext;
    testPageDataType(): TestPageDataTypeContext;
    textDataType(): TextDataTypeContext;
    xmlPortDataType(): XmlPortDataTypeContext;
    simpleDataType(): SimpleDataTypeContext;
    statementList(): StatementListContext;
    statementWithSeparator(): StatementWithSeparatorContext;
    statement(): StatementContext;
    compoundBlock(): CompoundBlockContext;
    assignmentStatement(): AssignmentStatementContext;
    ifStatement(): IfStatementContext;
    ifElseStatement(): IfElseStatementContext;
    caseStatement(): CaseStatementContext;
    caseElseStatement(): CaseElseStatementContext;
    caseBranch(): CaseBranchContext;
    repeatStatement(): RepeatStatementContext;
    whileStatement(): WhileStatementContext;
    forStatement(): ForStatementContext;
    forEachStatement(): ForEachStatementContext;
    withStatement(): WithStatementContext;
    exitStatement(): ExitStatementContext;
    breakStatement(): BreakStatementContext;
    continueStatement(): ContinueStatementContext;
    procedureCall(): ProcedureCallContext;
    argumentList(): ArgumentListContext;
    expression(): ExpressionContext;
    ternaryExpression(): TernaryExpressionContext;
    logicalInExpression(): LogicalInExpressionContext;
    logicalOrExpression(): LogicalOrExpressionContext;
    logicalAndExpression(): LogicalAndExpressionContext;
    equalityExpression(): EqualityExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    additiveExpression(): AdditiveExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    unaryExpression(): UnaryExpressionContext;
    unaryPlusExpression(): UnaryPlusExpressionContext;
    unaryMinusExpression(): UnaryMinusExpressionContext;
    unaryNotExpression(): UnaryNotExpressionContext;
    primaryExpression(_p: any): PrimaryExpressionContext;
    literal(): LiteralContext;
    memberAccess(): MemberAccessContext;
    objectScopeExpression(): ObjectScopeExpressionContext;
    pageObject(): PageObjectContext;
    pagePropertiesList(): PagePropertiesListContext;
    pagePropertyItem(): PagePropertyItemContext;
    pageProperty(): PagePropertyContext;
    tableViewExpression(): TableViewExpressionContext;
    sourceTableSortingExpr(): SourceTableSortingExprContext;
    sourceTableOrderExpr(): SourceTableOrderExprContext;
    layoutDefinition(): LayoutDefinitionContext;
    layoutElements(): LayoutElementsContext;
    areaDefinition(): AreaDefinitionContext;
    areaElements(): AreaElementsContext;
    groupDefinition(): GroupDefinitionContext;
    groupElements(): GroupElementsContext;
    groupPropertiesList(): GroupPropertiesListContext;
    groupPropertyItem(): GroupPropertyItemContext;
    groupProperty(): GroupPropertyContext;
    partDefinition(): PartDefinitionContext;
    partPropertiesList(): PartPropertiesListContext;
    partPropertyItem(): PartPropertyItemContext;
    partProperty(): PartPropertyContext;
    subpageLinkProperty(): SubpageLinkPropertyContext;
    pageLinkExpression(): PageLinkExpressionContext;
    subpageLinkFilter(): SubpageLinkFilterContext;
    subpageLinkConstExpression(): SubpageLinkConstExpressionContext;
    subpageLinkFieldExpression(): SubpageLinkFieldExpressionContext;
    subpageLinkFilterExpression(): SubpageLinkFilterExpressionContext;
    repeaterDefinition(): RepeaterDefinitionContext;
    repeaterElements(): RepeaterElementsContext;
    pageFieldItem(): PageFieldItemContext;
    pageLabelItem(): PageLabelItemContext;
    userControlItem(): UserControlItemContext;
    pageFieldPropertiesList(): PageFieldPropertiesListContext;
    pageFieldPropertyItem(): PageFieldPropertyItemContext;
    pageFieldProperty(): PageFieldPropertyContext;
    actionsDefinition(): ActionsDefinitionContext;
    actionElements(): ActionElementsContext;
    actionDefinition(): ActionDefinitionContext;
    actionPropertiesList(): ActionPropertiesListContext;
    actionPropertyItem(): ActionPropertyItemContext;
    actionProperty(): ActionPropertyContext;
    runPageLinkProperty(): RunPageLinkPropertyContext;
    runPageViewProperty(): RunPageViewPropertyContext;
    actionAreaDefinition(): ActionAreaDefinitionContext;
    actionGroupDefinition(): ActionGroupDefinitionContext;
    actionAreaElements(): ActionAreaElementsContext;
    actionRefsList(): ActionRefsListContext;
    actionRef(): ActionRefContext;
    codeunitObject(): CodeunitObjectContext;
    implementsInterfacesList(): ImplementsInterfacesListContext;
    codeunitPropertiesList(): CodeunitPropertiesListContext;
    codeunitPropertyItem(): CodeunitPropertyItemContext;
    codeunitProperty(): CodeunitPropertyContext;
    reportObject(): ReportObjectContext;
    reportPropertiesList(): ReportPropertiesListContext;
    reportPropertyItem(): ReportPropertyItemContext;
    reportProperty(): ReportPropertyContext;
    reportDatasetDefinition(): ReportDatasetDefinitionContext;
    reportDataItemDefinition(): ReportDataItemDefinitionContext;
    reportDataItemElementsList(): ReportDataItemElementsListContext;
    reportColumnDefinition(): ReportColumnDefinitionContext;
    reportDataItemPropertiesList(): ReportDataItemPropertiesListContext;
    reportDataItemPropertyItem(): ReportDataItemPropertyItemContext;
    reportDataItemProperty(): ReportDataItemPropertyContext;
    requestpageDefinition(): RequestpageDefinitionContext;
    renderingOptions(): RenderingOptionsContext;
    renderingLayout(): RenderingLayoutContext;
    labelsDefinition(): LabelsDefinitionContext;
    labelDefinition(): LabelDefinitionContext;
    reportDataItemLinkProperty(): ReportDataItemLinkPropertyContext;
    queryObject(): QueryObjectContext;
    queryElements(): QueryElementsContext;
    queryDataItemDefinition(): QueryDataItemDefinitionContext;
    queryDataItemElementsList(): QueryDataItemElementsListContext;
    queryPropertiesList(): QueryPropertiesListContext;
    queryPropertyItem(): QueryPropertyItemContext;
    queryProperty(): QueryPropertyContext;
    orderByProperty(): OrderByPropertyContext;
    queryColumnDefinition(): QueryColumnDefinitionContext;
    queryColumnPropertiesList(): QueryColumnPropertiesListContext;
    queryColumnPropertyItem(): QueryColumnPropertyItemContext;
    queryColumnProperty(): QueryColumnPropertyContext;
    queryFilterDefinition(): QueryFilterDefinitionContext;
    queryDataItemLinkProperty(): QueryDataItemLinkPropertyContext;
    dataItemTableFilterProp(): DataItemTableFilterPropContext;
    columnFilterProp(): ColumnFilterPropContext;
    xmlportObject(): XmlportObjectContext;
    xmlPortPropertiesList(): XmlPortPropertiesListContext;
    xmlPortPropertyItem(): XmlPortPropertyItemContext;
    xmlPortProperty(): XmlPortPropertyContext;
    xmlPortSchema(): XmlPortSchemaContext;
    xmlPortTextElement(): XmlPortTextElementContext;
    xmlPortFieldElement(): XmlPortFieldElementContext;
    xmlPortFieldAttribute(): XmlPortFieldAttributeContext;
    xmlPortTextAttribute(): XmlPortTextAttributeContext;
    xmlPortTableElement(): XmlPortTableElementContext;
    enumObject(): EnumObjectContext;
    enumPropertiesList(): EnumPropertiesListContext;
    enumPropertyItem(): EnumPropertyItemContext;
    enumProperty(): EnumPropertyContext;
    enumValuesList(): EnumValuesListContext;
    enumValueDefinition(): EnumValueDefinitionContext;
    enumValuePropertiesList(): EnumValuePropertiesListContext;
    enumValuePropertyItem(): EnumValuePropertyItemContext;
    enumValueProperty(): EnumValuePropertyContext;
    implementationProperty(): ImplementationPropertyContext;
    interfaceObject(): InterfaceObjectContext;
    interfacePropertiesList(): InterfacePropertiesListContext;
    interfacePropertyItem(): InterfacePropertyItemContext;
    interfaceProperty(): InterfacePropertyContext;
    accessProperty(): AccessPropertyContext;
    procedureDeclaration(): ProcedureDeclarationContext;
    controlAddInObject(): ControlAddInObjectContext;
    controlAddInElements(): ControlAddInElementsContext;
    controlAddInPropertiesList(): ControlAddInPropertiesListContext;
    controlAddInProperty(): ControlAddInPropertyContext;
    controlAddInPropertyItem(): ControlAddInPropertyItemContext;
    eventDeclaration(): EventDeclarationContext;
    profileObject(): ProfileObjectContext;
    profileElements(): ProfileElementsContext;
    profileProperty(): ProfilePropertyContext;
    profilePropertyItem(): ProfilePropertyItemContext;
    profileCustomization(): ProfileCustomizationContext;
    entitlementObject(): EntitlementObjectContext;
    entitlementElements(): EntitlementElementsContext;
    entitlementPropertiesList(): EntitlementPropertiesListContext;
    entitlementPropertyItem(): EntitlementPropertyItemContext;
    tableExtensionObject(): TableExtensionObjectContext;
    tableExtPropertiesList(): TableExtPropertiesListContext;
    tableExtPropertyItem(): TableExtPropertyItemContext;
    tableExtensionProperty(): TableExtensionPropertyContext;
    tableExtFieldModification(): TableExtFieldModificationContext;
    tableExtFieldsList(): TableExtFieldsListContext;
    pageExtensionObject(): PageExtensionObjectContext;
    pageExtLayoutDefinition(): PageExtLayoutDefinitionContext;
    pageExtActionsBlock(): PageExtActionsBlockContext;
    pageExtLayoutModification(): PageExtLayoutModificationContext;
    pageExtActionModification(): PageExtActionModificationContext;
    pageExtActionPropModification(): PageExtActionPropModificationContext;
    pageExtElementRelocation(): PageExtElementRelocationContext;
    pageExtLayoutModKeyword(): PageExtLayoutModKeywordContext;
    pageExtElementRelocationKeyword(): PageExtElementRelocationKeywordContext;
    pageExtElementModification(): PageExtElementModificationContext;
    enumExtensionObject(): EnumExtensionObjectContext;
}
declare namespace ALParser {
    export let EOF: any;
    export let PROCEDURE: number;
    export let PROTECTED: number;
    export let TRIGGER: number;
    export let EVENT: number;
    export let VAR: number;
    export let BEGIN: number;
    export let END: number;
    export let IF: number;
    export let THEN: number;
    export let ELSE: number;
    export let REPEAT: number;
    export let UNTIL: number;
    export let WHILE: number;
    export let FOR: number;
    export let TO: number;
    export let DOWNTO: number;
    export let FOREACH: number;
    export let IN: number;
    export let CASE: number;
    export let OF: number;
    export let WITH: number;
    export let DO: number;
    export let EXIT: number;
    export let BREAK: number;
    export let AND: number;
    export let OR: number;
    export let NOT: number;
    export let XOR: number;
    export let DIV: number;
    export let MOD: number;
    export let EXTENDS: number;
    export let THIS: number;
    export let NAMESPACE: number;
    export let USING: number;
    export let TABLE: number;
    export let PAGE: number;
    export let CODEUNIT: number;
    export let REPORT: number;
    export let QUERY: number;
    export let XMLPORT: number;
    export let ENUM: number;
    export let INTERFACE: number;
    export let CONTROLADDIN: number;
    export let PROFILE: number;
    export let ENTITLEMENT: number;
    export let PERMISSIONSET: number;
    export let TABLEDATA: number;
    export let TABLEEXTENSION: number;
    export let PAGEEXTENSION: number;
    export let ENUMEXTENSION: number;
    export let PERMISSIONSETEXTENSION: number;
    export let PROFILEEXTENSION: number;
    export let REPORTEXTENSION: number;
    export let PAGECUSTOMIZATION: number;
    export let BIGINTEGER: number;
    export let BIGTEXT: number;
    export let BLOB: number;
    export let BOOLEAN: number;
    export let BYTE: number;
    export let CHAR: number;
    export let CODE: number;
    export let COMPANYPROPERTY: number;
    export let COOKIE: number;
    export let DATABASE: number;
    export let DATATRANSFER: number;
    export let DATE: number;
    export let DATEFORMULA: number;
    export let DATETIME: number;
    export let DECIMAL: number;
    export let DIALOG: number;
    export let DICTIONARY: number;
    export let DOTNET: number;
    export let DURATION: number;
    export let ERRORINFO: number;
    export let FIELDREF: number;
    export let FILE: number;
    export let FILEUPLOAD: number;
    export let FILTERPAGEBUILDER: number;
    export let GUID: number;
    export let HTTPCLIENT: number;
    export let HTTPCONTENT: number;
    export let HTTPHEADERS: number;
    export let HTTPREQUESTMESSAGE: number;
    export let HTTPRESPONSEMESSAGE: number;
    export let INSTREAM: number;
    export let INTEGER: number;
    export let ISOLATEDSTORAGE: number;
    export let JSONARRAY: number;
    export let JSONOBJECT: number;
    export let JSONTOKEN: number;
    export let JSONVALUE: number;
    export let KEYREF: number;
    export let LABEL: number;
    export let LIST: number;
    export let MEDIA: number;
    export let MEDIASET: number;
    export let MODULEDEPENDENCYINFO: number;
    export let MODULEINFO: number;
    export let NAVAPP: number;
    export let NOTIFICATION: number;
    export let NUMBERSEQUENCE: number;
    export let OPTION: number;
    export let OUTSTREAM: number;
    export let PAGESTYLE: number;
    export let PRODUCTNAME: number;
    export let RECORD: number;
    export let RECORDID: number;
    export let RECORDREF: number;
    export let SECRETTEXT: number;
    export let SESSION: number;
    export let SESSIONINFORMATION: number;
    export let SESSIONSETTINGS: number;
    export let SYSTEM: number;
    export let TASKSCHEDULER: number;
    export let TESTHTTPREQUESTMESSAGE: number;
    export let TESTHTTPRESPONSEMESSAGE: number;
    export let TESTPAGE: number;
    export let TEXT: number;
    export let TEXTBUILDER: number;
    export let TEXTCONST: number;
    export let TIME: number;
    export let VARIANT: number;
    export let VERSION: number;
    export let WEBSERVICEACTIONCONTEXT: number;
    export let XMLATTRIBUTE: number;
    export let XMLATTRIBUTECOLLECTION: number;
    export let XMLCDATA: number;
    export let XMLCOMMENT: number;
    export let XMLDECLARATION: number;
    export let XMLDOCUMENT: number;
    export let XMLDOCUMENTTYPE: number;
    export let XMLELEMENT: number;
    export let XMLNAMESPACEMANAGER: number;
    export let XMLNAMETABLE: number;
    export let XMLNODE: number;
    export let XMLNODELIST: number;
    export let XMLPROCESSINGINSTRUCTION: number;
    export let XMLREADOPTIONS: number;
    export let XMLTEXT: number;
    export let XMLWRITEOPTIONS: number;
    export let AUDITCATEGORY: number;
    export let CLIENTTYPE: number;
    export let COMMITBEHAVIOR: number;
    export let DATACLASSIFICATION: number;
    export let DATASCOPE: number;
    export let DEFAULTLAYOUT: number;
    export let ERRORBEHAVIOR: number;
    export let ERRORTYPE: number;
    export let EXECUTIONCONTEXT: number;
    export let EXECUTIONMODE: number;
    export let FIELDCLASS: number;
    export let FIELDTYPE: number;
    export let HTTPREQUESTTYPE: number;
    export let INHERENTPERMISSIONSSCOPE: number;
    export let ISOLATIONLEVEL: number;
    export let NOTIFICATIONSCOPE: number;
    export let OBJECTTYPE: number;
    export let PAGEBACKGROUNDTASKERRORLEVEL: number;
    export let PERMISSIONOBJECTTYPE: number;
    export let PROMPTMODE: number;
    export let REPORTFORMAT: number;
    export let REPORTLAYOUTTYPE: number;
    export let SECURITYFILTER: number;
    export let SECURITYOPERATIONRESULT: number;
    export let TABLECONNECTIONTYPE: number;
    export let TELEMETRYSCOPE: number;
    export let TESTPERMISSIONS: number;
    export let TEXTENCODING: number;
    export let TRANSACTIONMODEL: number;
    export let TRANSACTIONTYPE: number;
    export let VERBOSITY: number;
    export let WEBSERVICEACTIONRESULTCODE: number;
    export let ABOUTTEXTML: number;
    export let ABOUTTITLEML: number;
    export let ARRAY: number;
    export let CONST: number;
    export let CONTINUE: number;
    export let OBJECT: number;
    export let ELEMENTS: number;
    export let FIELDGROUP: number;
    export let FIELDGROUPS: number;
    export let FIELDS: number;
    export let ACTIONS: number;
    export let LAYOUT: number;
    export let VIEWS: number;
    export let REQUESTPAGE: number;
    export let DATASET: number;
    export let LABELS: number;
    export let CUES: number;
    export let REPEATER: number;
    export let GROUP: number;
    export let PART: number;
    export let FIELD: number;
    export let ACTION: number;
    export let ACTIONREF: number;
    export let SEPARATOR: number;
    export let PROMOTEDACTIONCATEGORY: number;
    export let TEMPORARY: number;
    export let IMPLEMENTS: number;
    export let SOURCEEXPR: number;
    export let DECIMALPLACES: number;
    export let BLANKNUMBERS: number;
    export let THOUSANDSEPARATOR: number;
    export let AUTOFORMATEXPR: number;
    export let CALCFIELDS: number;
    export let CAPTIONML: number;
    export let COLUMNSPAN: number;
    export let CONTAINER: number;
    export let CUEGROUP: number;
    export let CUEGROUPLAYOUT: number;
    export let CUESOURCE: number;
    export let EXTENDED: number;
    export let FLOWFILTER: number;
    export let FLOWFIELD: number;
    export let FREEZECOLUMN: number;
    export let GROUPTOTAL: number;
    export let LINKEDOBJECT: number;
    export let OPTIONCAPTION: number;
    export let OPTIONSTRING: number;
    export let PROMOTEDISCATEGORY: number;
    export let PROMOTEDONLY: number;
    export let SUBFORMLINK: number;
    export let SUBFORMVIEW: number;
    export let SUBPAGEID: number;
    export let SUBPAGELINK: number;
    export let SUBPAGEVIEW: number;
    export let SUBTYPE: number;
    export let TABLECAPTION: number;
    export let TABLERELATION: number;
    export let TYPE: number;
    export let VALIDATE: number;
    export let CLUSTERED: number;
    export let SCHEMA: number;
    export let ID: number;
    export let VALUE: number;
    export let WHERE: number;
    export let CALCFORMULA: number;
    export let KEY: number;
    export let KEYS: number;
    export let ACCESSBYPERMISSION: number;
    export let AREA: number;
    export let DATACAPTIONEXPRESSION: number;
    export let ORDER: number;
    export let ORDERBY: number;
    export let PERMISSIONS: number;
    export let PROMOTEDACTIONCATEGORIES: number;
    export let RUNOBJECT: number;
    export let RUNPAGELINK: number;
    export let RUNPAGEVIEW: number;
    export let SOURCETABLEVIEW: number;
    export let SORTING: number;
    export let SYSTEMPART: number;
    export let USERCONTROL: number;
    export let DATAITEM: number;
    export let COLUMN: number;
    export let COLUMNFILTER: number;
    export let FILTER: number;
    export let DATAITEMLINK: number;
    export let DATAITEMTABLEFILTER: number;
    export let DATAITEMTABLEVIEW: number;
    export let FIELDATTRIBUTE: number;
    export let FIELDELEMENT: number;
    export let RENDERING: number;
    export let TABLEELEMENT: number;
    export let TEXTATTRIBUTE: number;
    export let TEXTELEMENT: number;
    export let ADDAFTER: number;
    export let ADDBEFORE: number;
    export let ADDFIRST: number;
    export let ADDLAST: number;
    export let MODIFY: number;
    export let MOVEAFTER: number;
    export let MOVEBEFORE: number;
    export let MOVEFIRST: number;
    export let MOVELAST: number;
    export let ACCESS: number;
    export let INTERNAL: number;
    export let LOCAL: number;
    export let PUBLIC: number;
    export let BOOLEAN_LITERAL: number;
    export let IDENTIFIER: number;
    export let STRING_LITERAL: number;
    export let VERBATIM_STRING: number;
    export let INTEGER_LITERAL: number;
    export let DECIMAL_LITERAL: number;
    export let DATE_LITERAL: number;
    export let ZERO_DATE_LITERAL: number;
    export let TIME_LITERAL: number;
    export let ZERO_TIME_LITERAL: number;
    export let DATETIME_LITERAL: number;
    export let PLUS: number;
    export let MINUS: number;
    export let PLUS_EQUAL: number;
    export let MINUS_EQUAL: number;
    export let MULTIPLY: number;
    export let DIVIDE: number;
    export let EQUAL: number;
    export let NOT_EQUAL: number;
    export let LESS_THAN: number;
    export let GREATER_THAN: number;
    export let LESS_EQUAL: number;
    export let GREATER_EQUAL: number;
    export let ASSIGN: number;
    export let COLON: number;
    export let SEMICOLON: number;
    export let COMMA: number;
    export let DOT: number;
    export let RANGE_OP: number;
    export let SCOPE_OP: number;
    export let LPAREN: number;
    export let RPAREN: number;
    export let LBRACKET: number;
    export let RBRACKET: number;
    export let LBRACE: number;
    export let RBRACE: number;
    export let AT: number;
    export let HASH: number;
    export let PIPE: number;
    export let QUESTION_MARK: number;
    export let LINE_COMMENT: number;
    export let BLOCK_COMMENT: number;
    export let PRAGMA: number;
    export let WS: number;
    export let RULE_compilationUnit: number;
    export let RULE_dataTypeName: number;
    export let RULE_objectTypeName: number;
    export let RULE_objectDefinitionKeyword: number;
    export let RULE_tablePropertyName: number;
    export let RULE_pagePropertyName: number;
    export let RULE_otherPropertyName: number;
    export let RULE_accessModifier: number;
    export let RULE_identifierWithNamespace: number;
    export let RULE_identifier: number;
    export let RULE_namespacePrefix: number;
    export let RULE_genericObjectProperty: number;
    export let RULE_namespaceDeclaration: number;
    export let RULE_usingRefList: number;
    export let RULE_usingReference: number;
    export let RULE_namespaceName: number;
    export let RULE_objectPermissionsList: number;
    export let RULE_permissionsPropertyValue: number;
    export let RULE_objectDefinition: number;
    export let RULE_objectReference: number;
    export let RULE_tableObject: number;
    export let RULE_tablePropertiesList: number;
    export let RULE_tablePropertyItem: number;
    export let RULE_tableProperty: number;
    export let RULE_tableFieldsList: number;
    export let RULE_tableFieldDefinition: number;
    export let RULE_tableFieldPropertiesList: number;
    export let RULE_tableFieldPropertyItem: number;
    export let RULE_tableFieldProperty: number;
    export let RULE_identifiersList: number;
    export let RULE_decimalPlacesPropValue: number;
    export let RULE_accessByPermissionProperty: number;
    export let RULE_tableRelationExpression: number;
    export let RULE_tableRelationIfExpression: number;
    export let RULE_tableRelationWhereExpression: number;
    export let RULE_tableRelationEqualityExpression: number;
    export let RULE_tableRelationReference: number;
    export let RULE_tableRelationConstReference: number;
    export let RULE_tableRelationFilter: number;
    export let RULE_relationFilterExpression: number;
    export let RULE_tableRelationFieldReference: number;
    export let RULE_calcFormulaExpression: number;
    export let RULE_tableFieldReference: number;
    export let RULE_tableKeysSection: number;
    export let RULE_keyList: number;
    export let RULE_keyItem: number;
    export let RULE_keyPropertiesList: number;
    export let RULE_keyPropertyItem: number;
    export let RULE_keyProperty: number;
    export let RULE_fieldGroupsList: number;
    export let RULE_fieldGroupItem: number;
    export let RULE_fieldGroupDefinition: number;
    export let RULE_fieldGroupFieldsList: number;
    export let RULE_variableDeclaration: number;
    export let RULE_variablesList: number;
    export let RULE_variableAttributesList: number;
    export let RULE_variableAttribute: number;
    export let RULE_triggersList: number;
    export let RULE_triggerDefinition: number;
    export let RULE_proceduresList: number;
    export let RULE_procedureDefinition: number;
    export let RULE_procedureAttributesList: number;
    export let RULE_procedureAttribute: number;
    export let RULE_procedureAccessModifier: number;
    export let RULE_procedureReturnType: number;
    export let RULE_parameterList: number;
    export let RULE_parameter: number;
    export let RULE_dataType: number;
    export let RULE_arrayDataType: number;
    export let RULE_codeDataType: number;
    export let RULE_codeunitDataType: number;
    export let RULE_dictionaryDataType: number;
    export let RULE_dotNetDataType: number;
    export let RULE_enumDataType: number;
    export let RULE_interfaceDataType: number;
    export let RULE_labelDataType: number;
    export let RULE_listDataType: number;
    export let RULE_optionDataType: number;
    export let RULE_pageDataType: number;
    export let RULE_queryDataType: number;
    export let RULE_recordDataType: number;
    export let RULE_reportDataType: number;
    export let RULE_testPageDataType: number;
    export let RULE_textDataType: number;
    export let RULE_xmlPortDataType: number;
    export let RULE_simpleDataType: number;
    export let RULE_statementList: number;
    export let RULE_statementWithSeparator: number;
    export let RULE_statement: number;
    export let RULE_compoundBlock: number;
    export let RULE_assignmentStatement: number;
    export let RULE_ifStatement: number;
    export let RULE_ifElseStatement: number;
    export let RULE_caseStatement: number;
    export let RULE_caseElseStatement: number;
    export let RULE_caseBranch: number;
    export let RULE_repeatStatement: number;
    export let RULE_whileStatement: number;
    export let RULE_forStatement: number;
    export let RULE_forEachStatement: number;
    export let RULE_withStatement: number;
    export let RULE_exitStatement: number;
    export let RULE_breakStatement: number;
    export let RULE_continueStatement: number;
    export let RULE_procedureCall: number;
    export let RULE_argumentList: number;
    export let RULE_expression: number;
    export let RULE_ternaryExpression: number;
    export let RULE_logicalInExpression: number;
    export let RULE_logicalOrExpression: number;
    export let RULE_logicalAndExpression: number;
    export let RULE_equalityExpression: number;
    export let RULE_relationalExpression: number;
    export let RULE_additiveExpression: number;
    export let RULE_multiplicativeExpression: number;
    export let RULE_unaryExpression: number;
    export let RULE_unaryPlusExpression: number;
    export let RULE_unaryMinusExpression: number;
    export let RULE_unaryNotExpression: number;
    export let RULE_primaryExpression: number;
    export let RULE_literal: number;
    export let RULE_memberAccess: number;
    export let RULE_objectScopeExpression: number;
    export let RULE_pageObject: number;
    export let RULE_pagePropertiesList: number;
    export let RULE_pagePropertyItem: number;
    export let RULE_pageProperty: number;
    export let RULE_tableViewExpression: number;
    export let RULE_sourceTableSortingExpr: number;
    export let RULE_sourceTableOrderExpr: number;
    export let RULE_layoutDefinition: number;
    export let RULE_layoutElements: number;
    export let RULE_areaDefinition: number;
    export let RULE_areaElements: number;
    export let RULE_groupDefinition: number;
    export let RULE_groupElements: number;
    export let RULE_groupPropertiesList: number;
    export let RULE_groupPropertyItem: number;
    export let RULE_groupProperty: number;
    export let RULE_partDefinition: number;
    export let RULE_partPropertiesList: number;
    export let RULE_partPropertyItem: number;
    export let RULE_partProperty: number;
    export let RULE_subpageLinkProperty: number;
    export let RULE_pageLinkExpression: number;
    export let RULE_subpageLinkFilter: number;
    export let RULE_subpageLinkConstExpression: number;
    export let RULE_subpageLinkFieldExpression: number;
    export let RULE_subpageLinkFilterExpression: number;
    export let RULE_repeaterDefinition: number;
    export let RULE_repeaterElements: number;
    export let RULE_pageFieldItem: number;
    export let RULE_pageLabelItem: number;
    export let RULE_userControlItem: number;
    export let RULE_pageFieldPropertiesList: number;
    export let RULE_pageFieldPropertyItem: number;
    export let RULE_pageFieldProperty: number;
    export let RULE_actionsDefinition: number;
    export let RULE_actionElements: number;
    export let RULE_actionDefinition: number;
    export let RULE_actionPropertiesList: number;
    export let RULE_actionPropertyItem: number;
    export let RULE_actionProperty: number;
    export let RULE_runPageLinkProperty: number;
    export let RULE_runPageViewProperty: number;
    export let RULE_actionAreaDefinition: number;
    export let RULE_actionGroupDefinition: number;
    export let RULE_actionAreaElements: number;
    export let RULE_actionRefsList: number;
    export let RULE_actionRef: number;
    export let RULE_codeunitObject: number;
    export let RULE_implementsInterfacesList: number;
    export let RULE_codeunitPropertiesList: number;
    export let RULE_codeunitPropertyItem: number;
    export let RULE_codeunitProperty: number;
    export let RULE_reportObject: number;
    export let RULE_reportPropertiesList: number;
    export let RULE_reportPropertyItem: number;
    export let RULE_reportProperty: number;
    export let RULE_reportDatasetDefinition: number;
    export let RULE_reportDataItemDefinition: number;
    export let RULE_reportDataItemElementsList: number;
    export let RULE_reportColumnDefinition: number;
    export let RULE_reportDataItemPropertiesList: number;
    export let RULE_reportDataItemPropertyItem: number;
    export let RULE_reportDataItemProperty: number;
    export let RULE_requestpageDefinition: number;
    export let RULE_renderingOptions: number;
    export let RULE_renderingLayout: number;
    export let RULE_labelsDefinition: number;
    export let RULE_labelDefinition: number;
    export let RULE_reportDataItemLinkProperty: number;
    export let RULE_queryObject: number;
    export let RULE_queryElements: number;
    export let RULE_queryDataItemDefinition: number;
    export let RULE_queryDataItemElementsList: number;
    export let RULE_queryPropertiesList: number;
    export let RULE_queryPropertyItem: number;
    export let RULE_queryProperty: number;
    export let RULE_orderByProperty: number;
    export let RULE_queryColumnDefinition: number;
    export let RULE_queryColumnPropertiesList: number;
    export let RULE_queryColumnPropertyItem: number;
    export let RULE_queryColumnProperty: number;
    export let RULE_queryFilterDefinition: number;
    export let RULE_queryDataItemLinkProperty: number;
    export let RULE_dataItemTableFilterProp: number;
    export let RULE_columnFilterProp: number;
    export let RULE_xmlportObject: number;
    export let RULE_xmlPortPropertiesList: number;
    export let RULE_xmlPortPropertyItem: number;
    export let RULE_xmlPortProperty: number;
    export let RULE_xmlPortSchema: number;
    export let RULE_xmlPortTextElement: number;
    export let RULE_xmlPortFieldElement: number;
    export let RULE_xmlPortFieldAttribute: number;
    export let RULE_xmlPortTextAttribute: number;
    export let RULE_xmlPortTableElement: number;
    export let RULE_enumObject: number;
    export let RULE_enumPropertiesList: number;
    export let RULE_enumPropertyItem: number;
    export let RULE_enumProperty: number;
    export let RULE_enumValuesList: number;
    export let RULE_enumValueDefinition: number;
    export let RULE_enumValuePropertiesList: number;
    export let RULE_enumValuePropertyItem: number;
    export let RULE_enumValueProperty: number;
    export let RULE_implementationProperty: number;
    export let RULE_interfaceObject: number;
    export let RULE_interfacePropertiesList: number;
    export let RULE_interfacePropertyItem: number;
    export let RULE_interfaceProperty: number;
    export let RULE_accessProperty: number;
    export let RULE_procedureDeclaration: number;
    export let RULE_controlAddInObject: number;
    export let RULE_controlAddInElements: number;
    export let RULE_controlAddInPropertiesList: number;
    export let RULE_controlAddInProperty: number;
    export let RULE_controlAddInPropertyItem: number;
    export let RULE_eventDeclaration: number;
    export let RULE_profileObject: number;
    export let RULE_profileElements: number;
    export let RULE_profileProperty: number;
    export let RULE_profilePropertyItem: number;
    export let RULE_profileCustomization: number;
    export let RULE_entitlementObject: number;
    export let RULE_entitlementElements: number;
    export let RULE_entitlementPropertiesList: number;
    export let RULE_entitlementPropertyItem: number;
    export let RULE_tableExtensionObject: number;
    export let RULE_tableExtPropertiesList: number;
    export let RULE_tableExtPropertyItem: number;
    export let RULE_tableExtensionProperty: number;
    export let RULE_tableExtFieldModification: number;
    export let RULE_tableExtFieldsList: number;
    export let RULE_pageExtensionObject: number;
    export let RULE_pageExtLayoutDefinition: number;
    export let RULE_pageExtActionsBlock: number;
    export let RULE_pageExtLayoutModification: number;
    export let RULE_pageExtActionModification: number;
    export let RULE_pageExtActionPropModification: number;
    export let RULE_pageExtElementRelocation: number;
    export let RULE_pageExtLayoutModKeyword: number;
    export let RULE_pageExtElementRelocationKeyword: number;
    export let RULE_pageExtElementModification: number;
    export let RULE_enumExtensionObject: number;
    export { CompilationUnitContext };
    export { DataTypeNameContext };
    export { ObjectTypeNameContext };
    export { ObjectDefinitionKeywordContext };
    export { TablePropertyNameContext };
    export { PagePropertyNameContext };
    export { OtherPropertyNameContext };
    export { AccessModifierContext };
    export { IdentifierWithNamespaceContext };
    export { IdentifierContext };
    export { NamespacePrefixContext };
    export { GenericObjectPropertyContext };
    export { NamespaceDeclarationContext };
    export { UsingRefListContext };
    export { UsingReferenceContext };
    export { NamespaceNameContext };
    export { ObjectPermissionsListContext };
    export { PermissionsPropertyValueContext };
    export { ObjectDefinitionContext };
    export { ObjectReferenceContext };
    export { TableObjectContext };
    export { TablePropertiesListContext };
    export { TablePropertyItemContext };
    export { TablePropertyContext };
    export { TableFieldsListContext };
    export { TableFieldDefinitionContext };
    export { TableFieldPropertiesListContext };
    export { TableFieldPropertyItemContext };
    export { TableFieldPropertyContext };
    export { IdentifiersListContext };
    export { DecimalPlacesPropValueContext };
    export { AccessByPermissionPropertyContext };
    export { TableRelationExpressionContext };
    export { TableRelationIfExpressionContext };
    export { TableRelationWhereExpressionContext };
    export { TableRelationEqualityExpressionContext };
    export { TableRelationReferenceContext };
    export { TableRelationConstReferenceContext };
    export { TableRelationFilterContext };
    export { RelationFilterExpressionContext };
    export { TableRelationFieldReferenceContext };
    export { CalcFormulaExpressionContext };
    export { TableFieldReferenceContext };
    export { TableKeysSectionContext };
    export { KeyListContext };
    export { KeyItemContext };
    export { KeyPropertiesListContext };
    export { KeyPropertyItemContext };
    export { KeyPropertyContext };
    export { FieldGroupsListContext };
    export { FieldGroupItemContext };
    export { FieldGroupDefinitionContext };
    export { FieldGroupFieldsListContext };
    export { VariableDeclarationContext };
    export { VariablesListContext };
    export { VariableAttributesListContext };
    export { VariableAttributeContext };
    export { TriggersListContext };
    export { TriggerDefinitionContext };
    export { ProceduresListContext };
    export { ProcedureDefinitionContext };
    export { ProcedureAttributesListContext };
    export { ProcedureAttributeContext };
    export { ProcedureAccessModifierContext };
    export { ProcedureReturnTypeContext };
    export { ParameterListContext };
    export { ParameterContext };
    export { DataTypeContext };
    export { ArrayDataTypeContext };
    export { CodeDataTypeContext };
    export { CodeunitDataTypeContext };
    export { DictionaryDataTypeContext };
    export { DotNetDataTypeContext };
    export { EnumDataTypeContext };
    export { InterfaceDataTypeContext };
    export { LabelDataTypeContext };
    export { ListDataTypeContext };
    export { OptionDataTypeContext };
    export { PageDataTypeContext };
    export { QueryDataTypeContext };
    export { RecordDataTypeContext };
    export { ReportDataTypeContext };
    export { TestPageDataTypeContext };
    export { TextDataTypeContext };
    export { XmlPortDataTypeContext };
    export { SimpleDataTypeContext };
    export { StatementListContext };
    export { StatementWithSeparatorContext };
    export { StatementContext };
    export { CompoundBlockContext };
    export { AssignmentStatementContext };
    export { IfStatementContext };
    export { IfElseStatementContext };
    export { CaseStatementContext };
    export { CaseElseStatementContext };
    export { CaseBranchContext };
    export { RepeatStatementContext };
    export { WhileStatementContext };
    export { ForStatementContext };
    export { ForEachStatementContext };
    export { WithStatementContext };
    export { ExitStatementContext };
    export { BreakStatementContext };
    export { ContinueStatementContext };
    export { ProcedureCallContext };
    export { ArgumentListContext };
    export { ExpressionContext };
    export { TernaryExpressionContext };
    export { LogicalInExpressionContext };
    export { LogicalOrExpressionContext };
    export { LogicalAndExpressionContext };
    export { EqualityExpressionContext };
    export { RelationalExpressionContext };
    export { AdditiveExpressionContext };
    export { MultiplicativeExpressionContext };
    export { UnaryExpressionContext };
    export { UnaryPlusExpressionContext };
    export { UnaryMinusExpressionContext };
    export { UnaryNotExpressionContext };
    export { PrimaryExpressionContext };
    export { LiteralContext };
    export { MemberAccessContext };
    export { ObjectScopeExpressionContext };
    export { PageObjectContext };
    export { PagePropertiesListContext };
    export { PagePropertyItemContext };
    export { PagePropertyContext };
    export { TableViewExpressionContext };
    export { SourceTableSortingExprContext };
    export { SourceTableOrderExprContext };
    export { LayoutDefinitionContext };
    export { LayoutElementsContext };
    export { AreaDefinitionContext };
    export { AreaElementsContext };
    export { GroupDefinitionContext };
    export { GroupElementsContext };
    export { GroupPropertiesListContext };
    export { GroupPropertyItemContext };
    export { GroupPropertyContext };
    export { PartDefinitionContext };
    export { PartPropertiesListContext };
    export { PartPropertyItemContext };
    export { PartPropertyContext };
    export { SubpageLinkPropertyContext };
    export { PageLinkExpressionContext };
    export { SubpageLinkFilterContext };
    export { SubpageLinkConstExpressionContext };
    export { SubpageLinkFieldExpressionContext };
    export { SubpageLinkFilterExpressionContext };
    export { RepeaterDefinitionContext };
    export { RepeaterElementsContext };
    export { PageFieldItemContext };
    export { PageLabelItemContext };
    export { UserControlItemContext };
    export { PageFieldPropertiesListContext };
    export { PageFieldPropertyItemContext };
    export { PageFieldPropertyContext };
    export { ActionsDefinitionContext };
    export { ActionElementsContext };
    export { ActionDefinitionContext };
    export { ActionPropertiesListContext };
    export { ActionPropertyItemContext };
    export { ActionPropertyContext };
    export { RunPageLinkPropertyContext };
    export { RunPageViewPropertyContext };
    export { ActionAreaDefinitionContext };
    export { ActionGroupDefinitionContext };
    export { ActionAreaElementsContext };
    export { ActionRefsListContext };
    export { ActionRefContext };
    export { CodeunitObjectContext };
    export { ImplementsInterfacesListContext };
    export { CodeunitPropertiesListContext };
    export { CodeunitPropertyItemContext };
    export { CodeunitPropertyContext };
    export { ReportObjectContext };
    export { ReportPropertiesListContext };
    export { ReportPropertyItemContext };
    export { ReportPropertyContext };
    export { ReportDatasetDefinitionContext };
    export { ReportDataItemDefinitionContext };
    export { ReportDataItemElementsListContext };
    export { ReportColumnDefinitionContext };
    export { ReportDataItemPropertiesListContext };
    export { ReportDataItemPropertyItemContext };
    export { ReportDataItemPropertyContext };
    export { RequestpageDefinitionContext };
    export { RenderingOptionsContext };
    export { RenderingLayoutContext };
    export { LabelsDefinitionContext };
    export { LabelDefinitionContext };
    export { ReportDataItemLinkPropertyContext };
    export { QueryObjectContext };
    export { QueryElementsContext };
    export { QueryDataItemDefinitionContext };
    export { QueryDataItemElementsListContext };
    export { QueryPropertiesListContext };
    export { QueryPropertyItemContext };
    export { QueryPropertyContext };
    export { OrderByPropertyContext };
    export { QueryColumnDefinitionContext };
    export { QueryColumnPropertiesListContext };
    export { QueryColumnPropertyItemContext };
    export { QueryColumnPropertyContext };
    export { QueryFilterDefinitionContext };
    export { QueryDataItemLinkPropertyContext };
    export { DataItemTableFilterPropContext };
    export { ColumnFilterPropContext };
    export { XmlportObjectContext };
    export { XmlPortPropertiesListContext };
    export { XmlPortPropertyItemContext };
    export { XmlPortPropertyContext };
    export { XmlPortSchemaContext };
    export { XmlPortTextElementContext };
    export { XmlPortFieldElementContext };
    export { XmlPortFieldAttributeContext };
    export { XmlPortTextAttributeContext };
    export { XmlPortTableElementContext };
    export { EnumObjectContext };
    export { EnumPropertiesListContext };
    export { EnumPropertyItemContext };
    export { EnumPropertyContext };
    export { EnumValuesListContext };
    export { EnumValueDefinitionContext };
    export { EnumValuePropertiesListContext };
    export { EnumValuePropertyItemContext };
    export { EnumValuePropertyContext };
    export { ImplementationPropertyContext };
    export { InterfaceObjectContext };
    export { InterfacePropertiesListContext };
    export { InterfacePropertyItemContext };
    export { InterfacePropertyContext };
    export { AccessPropertyContext };
    export { ProcedureDeclarationContext };
    export { ControlAddInObjectContext };
    export { ControlAddInElementsContext };
    export { ControlAddInPropertiesListContext };
    export { ControlAddInPropertyContext };
    export { ControlAddInPropertyItemContext };
    export { EventDeclarationContext };
    export { ProfileObjectContext };
    export { ProfileElementsContext };
    export { ProfilePropertyContext };
    export { ProfilePropertyItemContext };
    export { ProfileCustomizationContext };
    export { EntitlementObjectContext };
    export { EntitlementElementsContext };
    export { EntitlementPropertiesListContext };
    export { EntitlementPropertyItemContext };
    export { TableExtensionObjectContext };
    export { TableExtPropertiesListContext };
    export { TableExtPropertyItemContext };
    export { TableExtensionPropertyContext };
    export { TableExtFieldModificationContext };
    export { TableExtFieldsListContext };
    export { PageExtensionObjectContext };
    export { PageExtLayoutDefinitionContext };
    export { PageExtActionsBlockContext };
    export { PageExtLayoutModificationContext };
    export { PageExtActionModificationContext };
    export { PageExtActionPropModificationContext };
    export { PageExtElementRelocationContext };
    export { PageExtLayoutModKeywordContext };
    export { PageExtElementRelocationKeywordContext };
    export { PageExtElementModificationContext };
    export { EnumExtensionObjectContext };
}
export default ALParser;
declare class CompilationUnitContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EOF(): any;
    namespaceDeclaration(): any;
    usingRefList(): any;
    objectDefinition: (i: any) => any;
}
declare class DataTypeNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BIGINTEGER(): any;
    BIGTEXT(): any;
    BLOB(): any;
    BOOLEAN(): any;
    BYTE(): any;
    CHAR(): any;
    CODE(): any;
    CODEUNIT(): any;
    COMPANYPROPERTY(): any;
    COOKIE(): any;
    DATABASE(): any;
    DATATRANSFER(): any;
    DATE(): any;
    DATEFORMULA(): any;
    DATETIME(): any;
    DECIMAL(): any;
    DIALOG(): any;
    DICTIONARY(): any;
    DOTNET(): any;
    DURATION(): any;
    ENUM(): any;
    ERRORINFO(): any;
    FIELDREF(): any;
    FILE(): any;
    FILEUPLOAD(): any;
    FILTERPAGEBUILDER(): any;
    GUID(): any;
    HTTPCLIENT(): any;
    HTTPCONTENT(): any;
    HTTPHEADERS(): any;
    HTTPREQUESTMESSAGE(): any;
    HTTPRESPONSEMESSAGE(): any;
    INSTREAM(): any;
    INTEGER(): any;
    INTERFACE(): any;
    ISOLATEDSTORAGE(): any;
    JSONARRAY(): any;
    JSONOBJECT(): any;
    JSONTOKEN(): any;
    JSONVALUE(): any;
    KEYREF(): any;
    LABEL(): any;
    LIST(): any;
    MEDIA(): any;
    MEDIASET(): any;
    MODULEDEPENDENCYINFO(): any;
    MODULEINFO(): any;
    NAVAPP(): any;
    NOTIFICATION(): any;
    NUMBERSEQUENCE(): any;
    OPTION(): any;
    OUTSTREAM(): any;
    PAGE(): any;
    PAGESTYLE(): any;
    PRODUCTNAME(): any;
    QUERY(): any;
    RECORD(): any;
    RECORDID(): any;
    RECORDREF(): any;
    REPORT(): any;
    SECRETTEXT(): any;
    SESSION(): any;
    SESSIONINFORMATION(): any;
    SESSIONSETTINGS(): any;
    SYSTEM(): any;
    TASKSCHEDULER(): any;
    TESTHTTPREQUESTMESSAGE(): any;
    TESTHTTPRESPONSEMESSAGE(): any;
    TESTPAGE(): any;
    TEXT(): any;
    TEXTBUILDER(): any;
    TEXTCONST(): any;
    TIME(): any;
    VARIANT(): any;
    VERSION(): any;
    WEBSERVICEACTIONCONTEXT(): any;
    XMLATTRIBUTE(): any;
    XMLATTRIBUTECOLLECTION(): any;
    XMLCDATA(): any;
    XMLCOMMENT(): any;
    XMLDECLARATION(): any;
    XMLDOCUMENT(): any;
    XMLELEMENT(): any;
    XMLNAMESPACEMANAGER(): any;
    XMLNAMETABLE(): any;
    XMLNODE(): any;
    XMLNODELIST(): any;
    XMLPORT(): any;
    XMLPROCESSINGINSTRUCTION(): any;
    XMLREADOPTIONS(): any;
    XMLTEXT(): any;
    XMLWRITEOPTIONS(): any;
    AUDITCATEGORY(): any;
    CLIENTTYPE(): any;
    COMMITBEHAVIOR(): any;
    DATACLASSIFICATION(): any;
    DATASCOPE(): any;
    DEFAULTLAYOUT(): any;
    ERRORBEHAVIOR(): any;
    ERRORTYPE(): any;
    EXECUTIONCONTEXT(): any;
    EXECUTIONMODE(): any;
    FIELDCLASS(): any;
    FIELDTYPE(): any;
    HTTPREQUESTTYPE(): any;
    INHERENTPERMISSIONSSCOPE(): any;
    ISOLATIONLEVEL(): any;
    NOTIFICATIONSCOPE(): any;
    OBJECTTYPE(): any;
    PAGEBACKGROUNDTASKERRORLEVEL(): any;
    PERMISSIONOBJECTTYPE(): any;
    PROMPTMODE(): any;
    REPORTFORMAT(): any;
    REPORTLAYOUTTYPE(): any;
    SECURITYFILTER(): any;
    SECURITYOPERATIONRESULT(): any;
    TABLECONNECTIONTYPE(): any;
    TELEMETRYSCOPE(): any;
    TESTPERMISSIONS(): any;
    TEXTENCODING(): any;
    TRANSACTIONMODEL(): any;
    TRANSACTIONTYPE(): any;
    VERBOSITY(): any;
    WEBSERVICEACTIONRESULTCODE(): any;
}
declare class ObjectTypeNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CODEUNIT(): any;
    ENUM(): any;
    ENUMEXTENSION(): any;
    INTERFACE(): any;
    PAGE(): any;
    PAGEEXTENSION(): any;
    QUERY(): any;
    REPORT(): any;
    TABLE(): any;
    TABLEDATA(): any;
    TABLEEXTENSION(): any;
    TESTPAGE(): any;
    XMLPORT(): any;
}
declare class ObjectDefinitionKeywordContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACCESS(): any;
    ACTION(): any;
    ACTIONS(): any;
    ARRAY(): any;
    AUTOFORMATEXPR(): any;
    BLANKNUMBERS(): any;
    CALCFIELDS(): any;
    CAPTIONML(): any;
    CLUSTERED(): any;
    COLUMNSPAN(): any;
    CONST(): any;
    CONTAINER(): any;
    CONTINUE(): any;
    CUEGROUP(): any;
    CUESOURCE(): any;
    CUES(): any;
    DATASET(): any;
    DECIMALPLACES(): any;
    ELEMENTS(): any;
    EVENT(): any;
    EXTENDED(): any;
    FIELD(): any;
    FIELDELEMENT(): any;
    FIELDATTRIBUTE(): any;
    FIELDS(): any;
    FLOWFIELD(): any;
    FLOWFILTER(): any;
    FREEZECOLUMN(): any;
    GROUP(): any;
    GROUPTOTAL(): any;
    ID(): any;
    IMPLEMENTS(): any;
    LABELS(): any;
    LAYOUT(): any;
    LINKEDOBJECT(): any;
    MODIFY(): any;
    NAMESPACE(): any;
    OBJECT(): any;
    OPTIONCAPTION(): any;
    OPTIONSTRING(): any;
    ORDER(): any;
    ORDERBY(): any;
    PART(): any;
    PERMISSIONS(): any;
    PROMOTEDACTIONCATEGORY(): any;
    PROMOTEDISCATEGORY(): any;
    PROMOTEDONLY(): any;
    REPEATER(): any;
    REQUESTPAGE(): any;
    SCHEMA(): any;
    SEPARATOR(): any;
    SOURCEEXPR(): any;
    SOURCETABLEVIEW(): any;
    SORTING(): any;
    SUBFORMLINK(): any;
    SUBFORMVIEW(): any;
    SUBPAGEID(): any;
    SUBPAGELINK(): any;
    SUBPAGEVIEW(): any;
    SUBTYPE(): any;
    SYSTEMPART(): any;
    TABLE(): any;
    TABLECAPTION(): any;
    TABLEDATA(): any;
    TABLERELATION(): any;
    TABLEELEMENT(): any;
    TEMPORARY(): any;
    TEXTELEMENT(): any;
    THOUSANDSEPARATOR(): any;
    TYPE(): any;
    USING(): any;
    VALIDATE(): any;
    VALUE(): any;
    VIEWS(): any;
    WHERE(): any;
}
declare class TablePropertyNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    KEY(): any;
    KEYS(): any;
}
declare class PagePropertyNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACCESSBYPERMISSION(): any;
    AREA(): any;
    DATACAPTIONEXPRESSION(): any;
    PROMOTEDACTIONCATEGORIES(): any;
}
declare class OtherPropertyNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLUMN(): any;
    DATAITEM(): any;
    DATAITEMLINK(): any;
    DATAITEMTABLEVIEW(): any;
    FILTER(): any;
    RUNOBJECT(): any;
    RUNPAGELINK(): any;
    RUNPAGEVIEW(): any;
    TABLEELEMENT(): any;
    TEXTELEMENT(): any;
}
declare class AccessModifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACCESS(): any;
    PUBLIC(): any;
}
declare class IdentifierWithNamespaceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    namespacePrefix(): any;
}
declare class IdentifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IDENTIFIER(): any;
    dataTypeName(): any;
    objectDefinitionKeyword(): any;
    tablePropertyName(): any;
    pagePropertyName(): any;
    otherPropertyName(): any;
    accessModifier(): any;
}
declare class NamespacePrefixContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT: (i: any) => any;
}
declare class GenericObjectPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    EQUAL: (i: any) => any;
    expression(): any;
    identifiersList(): any;
    COMMA: (i: any) => any;
    literal: (i: any) => any;
}
declare class NamespaceDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NAMESPACE(): any;
    namespaceName(): any;
    SEMICOLON(): any;
}
declare class UsingRefListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    usingReference: (i: any) => any;
}
declare class UsingReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    USING(): any;
    namespaceName(): any;
    SEMICOLON(): any;
}
declare class NamespaceNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT: (i: any) => any;
}
declare class ObjectPermissionsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PERMISSIONS(): any;
    EQUAL(): any;
    permissionsPropertyValue: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class PermissionsPropertyValueContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectTypeName(): any;
    identifier(): any;
    EQUAL(): any;
    IDENTIFIER(): any;
}
declare class ObjectDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableObject(): any;
    pageObject(): any;
    codeunitObject(): any;
    reportObject(): any;
    queryObject(): any;
    xmlportObject(): any;
    enumObject(): any;
    enumExtensionObject(): any;
    interfaceObject(): any;
    controlAddInObject(): any;
    profileObject(): any;
    entitlementObject(): any;
    tableExtensionObject(): any;
    pageExtensionObject(): any;
}
declare class ObjectReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    objectTypeName(): any;
    identifier(): any;
}
declare class TableObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TABLE(): any;
    INTEGER_LITERAL(): any;
    identifier(): any;
    LBRACE(): any;
    RBRACE(): any;
    tablePropertiesList(): any;
    variablesList: (i: any) => any;
    tableFieldsList(): any;
    tableKeysSection(): any;
    fieldGroupsList(): any;
    triggersList(): any;
    proceduresList: (i: any) => any;
}
declare class TablePropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tablePropertyItem: (i: any) => any;
}
declare class TablePropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableProperty(): any;
    SEMICOLON(): any;
}
declare class TablePropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessProperty(): any;
    CAPTIONML(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
    STRING_LITERAL: (i: any) => any;
    COMMA: (i: any) => any;
    objectPermissionsList(): any;
    genericObjectProperty(): any;
}
declare class TableFieldsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDS(): any;
    LBRACE(): any;
    RBRACE(): any;
    tableFieldDefinition: (i: any) => any;
}
declare class TableFieldDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELD(): any;
    LPAREN(): any;
    INTEGER_LITERAL(): any;
    SEMICOLON: (i: any) => any;
    identifier(): any;
    dataType(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    tableFieldPropertiesList(): any;
    triggersList(): any;
}
declare class TableFieldPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableFieldPropertyItem: (i: any) => any;
}
declare class TableFieldPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableFieldProperty(): any;
    SEMICOLON(): any;
}
declare class TableFieldPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessByPermissionProperty(): any;
    accessProperty(): any;
    CALCFORMULA(): any;
    EQUAL(): any;
    calcFormulaExpression(): any;
    DECIMALPLACES(): any;
    decimalPlacesPropValue(): any;
    TABLERELATION(): any;
    tableRelationExpression(): any;
    genericObjectProperty(): any;
}
declare class IdentifiersListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class DecimalPlacesPropValueContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INTEGER_LITERAL: (i: any) => any;
    COLON(): any;
}
declare class AccessByPermissionPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACCESSBYPERMISSION(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
}
declare class TableRelationExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableFieldReference(): any;
    tableRelationIfExpression(): any;
    tableRelationWhereExpression(): any;
    ELSE(): any;
    tableRelationExpression(): any;
}
declare class TableRelationIfExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IF(): any;
    LPAREN(): any;
    tableRelationEqualityExpression(): any;
    RPAREN(): any;
}
declare class TableRelationWhereExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WHERE(): any;
    LPAREN(): any;
    tableRelationEqualityExpression: (i: any) => any;
    RPAREN(): any;
    COMMA: (i: any) => any;
}
declare class TableRelationEqualityExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    EQUAL(): any;
    tableRelationReference(): any;
}
declare class TableRelationReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableRelationFieldReference(): any;
    tableRelationConstReference(): any;
    tableRelationFilter(): any;
}
declare class TableRelationConstReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONST(): any;
    LPAREN(): any;
    RPAREN(): any;
    literal(): any;
    identifier: (i: any) => any;
    SCOPE_OP(): any;
}
declare class TableRelationFilterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FILTER(): any;
    LPAREN(): any;
    relationFilterExpression(): any;
    RPAREN(): any;
}
declare class RelationFilterExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    EQUAL(): any;
    NOT_EQUAL(): any;
    GREATER_THAN(): any;
    LESS_THAN(): any;
    GREATER_EQUAL(): any;
    LESS_EQUAL(): any;
    literal: (i: any) => any;
    RANGE_OP(): any;
    PIPE: (i: any) => any;
}
declare class TableRelationFieldReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELD(): any;
    LPAREN(): any;
    tableFieldReference(): any;
    RPAREN(): any;
}
declare class CalcFormulaExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    LPAREN(): any;
    tableFieldReference(): any;
    RPAREN(): any;
    tableRelationWhereExpression(): any;
}
declare class TableFieldReferenceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    DOT(): any;
}
declare class TableKeysSectionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    KEYS(): any;
    LBRACE(): any;
    keyList(): any;
    RBRACE(): any;
}
declare class KeyListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    keyItem: (i: any) => any;
}
declare class KeyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    KEY(): any;
    LPAREN(): any;
    identifier: (i: any) => any;
    SEMICOLON(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    COMMA: (i: any) => any;
    keyPropertiesList(): any;
}
declare class KeyPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    keyPropertyItem: (i: any) => any;
}
declare class KeyPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    keyProperty(): any;
    SEMICOLON(): any;
}
declare class KeyPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
}
declare class FieldGroupsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDGROUPS(): any;
    LBRACE(): any;
    RBRACE(): any;
    fieldGroupItem: (i: any) => any;
}
declare class FieldGroupItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDGROUP(): any;
    LPAREN(): any;
    fieldGroupDefinition(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
}
declare class FieldGroupDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    SEMICOLON(): any;
    fieldGroupFieldsList(): any;
}
declare class FieldGroupFieldsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class VariableDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    COLON(): any;
    dataType(): any;
    SEMICOLON(): any;
    variableAttributesList(): any;
    COMMA: (i: any) => any;
}
declare class VariablesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    VAR(): any;
    PROTECTED(): any;
    variableDeclaration: (i: any) => any;
}
declare class VariableAttributesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    variableAttribute: (i: any) => any;
}
declare class VariableAttributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACKET(): any;
    expression(): any;
    RBRACKET(): any;
}
declare class TriggersListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    triggerDefinition: (i: any) => any;
}
declare class TriggerDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TRIGGER(): any;
    IDENTIFIER(): any;
    LPAREN(): any;
    RPAREN(): any;
    BEGIN(): any;
    END(): any;
    SEMICOLON(): any;
    parameterList(): any;
    procedureReturnType(): any;
    variablesList(): any;
    statementList(): any;
}
declare class ProceduresListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    procedureDefinition: (i: any) => any;
}
declare class ProcedureDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PROCEDURE(): any;
    identifier(): any;
    LPAREN(): any;
    RPAREN(): any;
    BEGIN(): any;
    END(): any;
    SEMICOLON: (i: any) => any;
    procedureAttributesList(): any;
    procedureAccessModifier(): any;
    parameterList(): any;
    procedureReturnType(): any;
    variablesList(): any;
    statementList(): any;
}
declare class ProcedureAttributesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    procedureAttribute: (i: any) => any;
}
declare class ProcedureAttributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LBRACKET(): any;
    expression(): any;
    RBRACKET(): any;
}
declare class ProcedureAccessModifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LOCAL(): any;
    INTERNAL(): any;
    PROTECTED(): any;
}
declare class ProcedureReturnTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLON(): any;
    dataType(): any;
    identifier(): any;
}
declare class ParameterListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    parameter: (i: any) => any;
    SEMICOLON: (i: any) => any;
}
declare class ParameterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    COLON(): any;
    dataType(): any;
    VAR(): any;
}
declare class DataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    simpleDataType(): any;
    arrayDataType(): any;
    codeDataType(): any;
    codeunitDataType(): any;
    dictionaryDataType(): any;
    dotNetDataType(): any;
    enumDataType(): any;
    interfaceDataType(): any;
    labelDataType(): any;
    listDataType(): any;
    optionDataType(): any;
    pageDataType(): any;
    queryDataType(): any;
    recordDataType(): any;
    reportDataType(): any;
    testPageDataType(): any;
    textDataType(): any;
    xmlPortDataType(): any;
}
declare class ArrayDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ARRAY(): any;
    LBRACKET(): any;
    INTEGER_LITERAL: (i: any) => any;
    RBRACKET(): any;
    OF(): any;
    dataType(): any;
    COMMA: (i: any) => any;
}
declare class CodeDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CODE(): any;
    LBRACKET(): any;
    INTEGER_LITERAL(): any;
    RBRACKET(): any;
}
declare class CodeunitDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CODEUNIT(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class DictionaryDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DICTIONARY(): any;
    OF(): any;
    LBRACKET(): any;
    dataType: (i: any) => any;
    COMMA(): any;
    RBRACKET(): any;
}
declare class DotNetDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOTNET(): any;
    identifier(): any;
}
declare class EnumDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUM(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class InterfaceDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INTERFACE(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class LabelDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LABEL(): any;
    STRING_LITERAL(): any;
    VERBATIM_STRING: (i: any) => any;
    COMMA: (i: any) => any;
    IDENTIFIER: (i: any) => any;
    EQUAL: (i: any) => any;
    literal: (i: any) => any;
}
declare class ListDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LIST(): any;
    OF(): any;
    LBRACKET(): any;
    dataType(): any;
    RBRACKET(): any;
}
declare class OptionDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    OPTION(): any;
    COMMA(): any;
    identifiersList(): any;
}
declare class PageDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PAGE(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class QueryDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUERY(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class RecordDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    RECORD(): any;
    identifier(): any;
    namespacePrefix(): any;
    TEMPORARY(): any;
}
declare class ReportDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REPORT(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class TestPageDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TESTPAGE(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class TextDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TEXT(): any;
    LBRACKET(): any;
    INTEGER_LITERAL(): any;
    RBRACKET(): any;
}
declare class XmlPortDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    XMLPORT(): any;
    identifier(): any;
    namespacePrefix(): any;
}
declare class SimpleDataTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACTION(): any;
    BIGINTEGER(): any;
    BLOB(): any;
    BOOLEAN(): any;
    CHAR(): any;
    DATASCOPE(): any;
    DATE(): any;
    DATEFORMULA(): any;
    DATETIME(): any;
    DECIMAL(): any;
    DIALOG(): any;
    DURATION(): any;
    FIELDREF(): any;
    GUID(): any;
    HTTPREQUESTMESSAGE(): any;
    HTTPRESPONSEMESSAGE(): any;
    INSTREAM(): any;
    INTEGER(): any;
    JSONARRAY(): any;
    JSONOBJECT(): any;
    JSONTOKEN(): any;
    JSONVALUE(): any;
    MEDIA(): any;
    MEDIASET(): any;
    NAMESPACE(): any;
    NOTIFICATION(): any;
    NOTIFICATIONSCOPE(): any;
    OUTSTREAM(): any;
    PAGESTYLE(): any;
    RECORDID(): any;
    RECORDREF(): any;
    SECRETTEXT(): any;
    TESTHTTPREQUESTMESSAGE(): any;
    TESTHTTPRESPONSEMESSAGE(): any;
    TIME(): any;
    VARIANT(): any;
    WEBSERVICEACTIONCONTEXT(): any;
    WEBSERVICEACTIONRESULTCODE(): any;
    XMLDECLARATION(): any;
    XMLDOCUMENT(): any;
    XMLDOCUMENTTYPE(): any;
    XMLELEMENT(): any;
    XMLNAMESPACEMANAGER(): any;
    XMLNAMETABLE(): any;
    XMLNODE(): any;
    XMLNODELIST(): any;
}
declare class StatementListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    statementWithSeparator: (i: any) => any;
    statement(): any;
}
declare class StatementWithSeparatorContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SEMICOLON(): any;
    statement(): any;
}
declare class StatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    assignmentStatement(): any;
    ifStatement(): any;
    caseStatement(): any;
    repeatStatement(): any;
    whileStatement(): any;
    forStatement(): any;
    forEachStatement(): any;
    withStatement(): any;
    exitStatement(): any;
    breakStatement(): any;
    continueStatement(): any;
    procedureCall(): any;
    compoundBlock(): any;
}
declare class CompoundBlockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BEGIN(): any;
    END(): any;
    statementList(): any;
}
declare class AssignmentStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression: (i: any) => any;
    ASSIGN(): any;
    PLUS_EQUAL(): any;
    MINUS_EQUAL(): any;
}
declare class IfStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IF(): any;
    expression(): any;
    THEN(): any;
    statement(): any;
    ifElseStatement(): any;
}
declare class IfElseStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ELSE(): any;
    statement(): any;
}
declare class CaseStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CASE(): any;
    expression(): any;
    OF(): any;
    END(): any;
    caseBranch: (i: any) => any;
    caseElseStatement(): any;
}
declare class CaseElseStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ELSE(): any;
    statementList(): any;
}
declare class CaseBranchContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression: (i: any) => any;
    COLON(): any;
    statementWithSeparator(): any;
    SEMICOLON(): any;
    COMMA: (i: any) => any;
    RANGE_OP: (i: any) => any;
}
declare class RepeatStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REPEAT(): any;
    statementList(): any;
    UNTIL(): any;
    expression(): any;
}
declare class WhileStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WHILE(): any;
    expression(): any;
    DO(): any;
    statement(): any;
}
declare class ForStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FOR(): any;
    identifier(): any;
    ASSIGN(): any;
    expression: (i: any) => any;
    TO(): any;
    DO(): any;
    statement(): any;
    DOWNTO(): any;
}
declare class ForEachStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FOREACH(): any;
    identifier(): any;
    IN(): any;
    expression(): any;
    DO(): any;
    statement(): any;
}
declare class WithStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    WITH(): any;
    expression(): any;
    DO(): any;
    statement(): any;
}
declare class ExitStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EXIT(): any;
    LPAREN(): any;
    expression(): any;
    RPAREN(): any;
}
declare class BreakStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    BREAK(): any;
}
declare class ContinueStatementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONTINUE(): any;
}
declare class ProcedureCallContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    LPAREN(): any;
    RPAREN(): any;
    argumentList(): any;
}
declare class ArgumentListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    expression: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class ExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    logicalOrExpression(): any;
    logicalInExpression(): any;
    ternaryExpression(): any;
}
declare class TernaryExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUESTION_MARK(): any;
    COLON(): any;
    logicalOrExpression: (i: any) => any;
    logicalInExpression: (i: any) => any;
}
declare class LogicalInExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    logicalAndExpression: (i: any) => any;
    IN(): any;
    LBRACKET(): any;
    RBRACKET(): any;
    COMMA: (i: any) => any;
    RANGE_OP: (i: any) => any;
}
declare class LogicalOrExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    logicalAndExpression: (i: any) => any;
    OR: (i: any) => any;
    XOR: (i: any) => any;
}
declare class LogicalAndExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    equalityExpression: (i: any) => any;
    AND: (i: any) => any;
}
declare class EqualityExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    relationalExpression: (i: any) => any;
    EQUAL: (i: any) => any;
    NOT_EQUAL: (i: any) => any;
}
declare class RelationalExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    additiveExpression: (i: any) => any;
    LESS_THAN: (i: any) => any;
    GREATER_THAN: (i: any) => any;
    LESS_EQUAL: (i: any) => any;
    GREATER_EQUAL: (i: any) => any;
}
declare class AdditiveExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    multiplicativeExpression: (i: any) => any;
    PLUS: (i: any) => any;
    MINUS: (i: any) => any;
}
declare class MultiplicativeExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    unaryExpression: (i: any) => any;
    MULTIPLY: (i: any) => any;
    DIVIDE: (i: any) => any;
    DIV: (i: any) => any;
    MOD: (i: any) => any;
}
declare class UnaryExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    unaryPlusExpression(): any;
    unaryMinusExpression(): any;
    unaryNotExpression(): any;
    primaryExpression(): any;
}
declare class UnaryPlusExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PLUS(): any;
    unaryExpression(): any;
}
declare class UnaryMinusExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MINUS(): any;
    unaryExpression(): any;
}
declare class UnaryNotExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    NOT(): any;
    unaryExpression(): any;
}
declare class PrimaryExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    expression(): any;
    RPAREN(): any;
    literal(): any;
    identifier(): any;
    THIS(): any;
    LBRACKET(): any;
    argumentList(): any;
    RBRACKET(): any;
    procedureCall(): any;
    primaryExpression(): any;
    memberAccess(): any;
    objectScopeExpression(): any;
}
declare class LiteralContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    STRING_LITERAL(): any;
    INTEGER_LITERAL(): any;
    DECIMAL_LITERAL(): any;
    DATE_LITERAL(): any;
    ZERO_DATE_LITERAL(): any;
    TIME_LITERAL(): any;
    ZERO_TIME_LITERAL(): any;
    DATETIME_LITERAL(): any;
    BOOLEAN_LITERAL(): any;
}
declare class MemberAccessContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DOT(): any;
    primaryExpression(): any;
}
declare class ObjectScopeExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SCOPE_OP(): any;
    primaryExpression(): any;
}
declare class PageObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PAGE(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    RBRACE(): any;
    pagePropertiesList(): any;
    variablesList: (i: any) => any;
    layoutDefinition(): any;
    actionsDefinition(): any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class PagePropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pagePropertyItem: (i: any) => any;
}
declare class PagePropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageProperty(): any;
    SEMICOLON(): any;
}
declare class PagePropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessByPermissionProperty(): any;
    DATACAPTIONEXPRESSION(): any;
    EQUAL(): any;
    STRING_LITERAL(): any;
    objectPermissionsList(): any;
    PROMOTEDACTIONCATEGORIES(): any;
    SOURCETABLEVIEW(): any;
    tableViewExpression(): any;
    genericObjectProperty(): any;
}
declare class TableViewExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    sourceTableSortingExpr(): any;
    sourceTableOrderExpr(): any;
    tableRelationWhereExpression(): any;
}
declare class SourceTableSortingExprContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SORTING(): any;
    LPAREN(): any;
    identifiersList(): any;
    RPAREN(): any;
}
declare class SourceTableOrderExprContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ORDER(): any;
    LPAREN(): any;
    IDENTIFIER(): any;
    RPAREN(): any;
}
declare class LayoutDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LAYOUT(): any;
    LBRACE(): any;
    layoutElements(): any;
    RBRACE(): any;
}
declare class LayoutElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    areaDefinition: (i: any) => any;
    groupDefinition: (i: any) => any;
    pageFieldItem: (i: any) => any;
    userControlItem: (i: any) => any;
    pageLabelItem: (i: any) => any;
    partDefinition: (i: any) => any;
    repeaterDefinition: (i: any) => any;
}
declare class AreaDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AREA(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    areaElements(): any;
    RBRACE(): any;
}
declare class AreaElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    groupDefinition: (i: any) => any;
    pageFieldItem: (i: any) => any;
    userControlItem: (i: any) => any;
    pageLabelItem: (i: any) => any;
    partDefinition: (i: any) => any;
    repeaterDefinition: (i: any) => any;
}
declare class GroupDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GROUP(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    groupElements(): any;
    RBRACE(): any;
}
declare class GroupElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    groupPropertiesList(): any;
    pageFieldItem: (i: any) => any;
    userControlItem: (i: any) => any;
    pageLabelItem: (i: any) => any;
    groupDefinition: (i: any) => any;
    partDefinition: (i: any) => any;
    repeaterDefinition: (i: any) => any;
}
declare class GroupPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    groupPropertyItem: (i: any) => any;
}
declare class GroupPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    groupProperty(): any;
    SEMICOLON(): any;
}
declare class GroupPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ABOUTTEXTML(): any;
    EQUAL(): any;
    STRING_LITERAL(): any;
    ABOUTTITLEML(): any;
    genericObjectProperty(): any;
}
declare class PartDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LPAREN(): any;
    IDENTIFIER: (i: any) => any;
    SEMICOLON(): any;
    RPAREN(): any;
    LBRACE(): any;
    partPropertiesList(): any;
    RBRACE(): any;
    PART(): any;
    SYSTEMPART(): any;
}
declare class PartPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    partPropertyItem: (i: any) => any;
}
declare class PartPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    partProperty(): any;
    SEMICOLON(): any;
}
declare class PartPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subpageLinkProperty(): any;
    genericObjectProperty(): any;
}
declare class SubpageLinkPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SUBPAGELINK(): any;
    EQUAL(): any;
    pageLinkExpression(): any;
}
declare class PageLinkExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    subpageLinkFilter: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class SubpageLinkFilterContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    EQUAL(): any;
    subpageLinkConstExpression(): any;
    subpageLinkFieldExpression(): any;
    subpageLinkFilterExpression(): any;
}
declare class SubpageLinkConstExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONST(): any;
    LPAREN(): any;
    RPAREN(): any;
    literal(): any;
    identifier: (i: any) => any;
    SCOPE_OP(): any;
}
declare class SubpageLinkFieldExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELD(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
}
declare class SubpageLinkFilterExpressionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FILTER(): any;
    LPAREN(): any;
    relationFilterExpression(): any;
    RPAREN(): any;
}
declare class RepeaterDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REPEATER(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    repeaterElements(): any;
    RBRACE(): any;
}
declare class RepeaterElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageFieldPropertiesList(): any;
    pageFieldItem: (i: any) => any;
    groupDefinition: (i: any) => any;
}
declare class PageFieldItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELD(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageFieldPropertiesList(): any;
    triggersList(): any;
}
declare class PageLabelItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LABEL(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageFieldPropertiesList(): any;
}
declare class UserControlItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    USERCONTROL(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageFieldPropertiesList(): any;
    triggersList(): any;
}
declare class PageFieldPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageFieldPropertyItem: (i: any) => any;
}
declare class PageFieldPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageFieldProperty(): any;
    SEMICOLON(): any;
}
declare class PageFieldPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DECIMALPLACES(): any;
    EQUAL(): any;
    decimalPlacesPropValue(): any;
    TABLERELATION(): any;
    tableRelationExpression(): any;
    genericObjectProperty(): any;
}
declare class ActionsDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACTIONS(): any;
    LBRACE(): any;
    actionElements(): any;
    RBRACE(): any;
}
declare class ActionElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    actionPropertiesList(): any;
    actionDefinition: (i: any) => any;
    actionRefsList: (i: any) => any;
    actionGroupDefinition: (i: any) => any;
    actionAreaDefinition: (i: any) => any;
}
declare class ActionDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACTION(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    actionPropertiesList(): any;
    triggersList(): any;
}
declare class ActionPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    actionPropertyItem: (i: any) => any;
}
declare class ActionPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    actionProperty(): any;
    SEMICOLON(): any;
}
declare class ActionPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    accessByPermissionProperty(): any;
    RUNOBJECT(): any;
    EQUAL(): any;
    objectReference(): any;
    runPageLinkProperty(): any;
    runPageViewProperty(): any;
}
declare class RunPageLinkPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    RUNPAGELINK(): any;
    EQUAL(): any;
    pageLinkExpression(): any;
}
declare class RunPageViewPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    RUNPAGEVIEW(): any;
    EQUAL(): any;
    tableViewExpression(): any;
}
declare class ActionAreaDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    AREA(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    actionAreaElements(): any;
    RBRACE(): any;
}
declare class ActionGroupDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    GROUP(): any;
    LPAREN(): any;
    IDENTIFIER(): any;
    RPAREN(): any;
    LBRACE(): any;
    actionElements(): any;
    RBRACE(): any;
}
declare class ActionAreaElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    actionPropertiesList(): any;
    actionDefinition: (i: any) => any;
    actionGroupDefinition: (i: any) => any;
    actionRefsList: (i: any) => any;
}
declare class ActionRefsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    actionRef: (i: any) => any;
}
declare class ActionRefContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACTIONREF(): any;
    LPAREN(): any;
    identifier: (i: any) => any;
    SEMICOLON(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    actionPropertiesList(): any;
}
declare class CodeunitObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CODEUNIT(): any;
    INTEGER_LITERAL(): any;
    identifier(): any;
    LBRACE(): any;
    RBRACE(): any;
    implementsInterfacesList(): any;
    codeunitPropertiesList(): any;
    variablesList: (i: any) => any;
    triggersList(): any;
    proceduresList: (i: any) => any;
}
declare class ImplementsInterfacesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    IMPLEMENTS(): any;
    identifierWithNamespace: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class CodeunitPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    codeunitPropertyItem: (i: any) => any;
}
declare class CodeunitPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    codeunitProperty(): any;
    SEMICOLON(): any;
}
declare class CodeunitPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessByPermissionProperty(): any;
    accessProperty(): any;
    objectPermissionsList(): any;
    genericObjectProperty(): any;
}
declare class ReportObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REPORT(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    RBRACE(): any;
    reportPropertiesList(): any;
    reportDatasetDefinition(): any;
    requestpageDefinition(): any;
    renderingOptions(): any;
    labelsDefinition(): any;
    variablesList: (i: any) => any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class ReportPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reportPropertyItem: (i: any) => any;
}
declare class ReportPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reportProperty(): any;
    SEMICOLON(): any;
}
declare class ReportPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessProperty(): any;
    genericObjectProperty(): any;
    accessByPermissionProperty(): any;
    objectPermissionsList(): any;
}
declare class ReportDatasetDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATASET(): any;
    LBRACE(): any;
    RBRACE(): any;
    reportDataItemDefinition: (i: any) => any;
}
declare class ReportDataItemDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATAITEM(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    reportDataItemPropertiesList(): any;
    reportDataItemElementsList(): any;
    triggersList(): any;
}
declare class ReportDataItemElementsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reportColumnDefinition: (i: any) => any;
    reportDataItemDefinition: (i: any) => any;
}
declare class ReportColumnDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLUMN(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    reportDataItemPropertiesList(): any;
}
declare class ReportDataItemPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reportDataItemPropertyItem: (i: any) => any;
}
declare class ReportDataItemPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    reportDataItemProperty(): any;
    SEMICOLON(): any;
}
declare class ReportDataItemPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    reportDataItemLinkProperty(): any;
    DATAITEMTABLEVIEW(): any;
    EQUAL(): any;
    tableViewExpression(): any;
    DECIMALPLACES(): any;
    decimalPlacesPropValue(): any;
}
declare class RequestpageDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    REQUESTPAGE(): any;
    LBRACE(): any;
    RBRACE(): any;
    pagePropertiesList(): any;
    layoutDefinition(): any;
    triggersList: (i: any) => any;
    variablesList: (i: any) => any;
    proceduresList: (i: any) => any;
    actionsDefinition: (i: any) => any;
}
declare class RenderingOptionsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    RENDERING(): any;
    LBRACE(): any;
    RBRACE(): any;
    renderingLayout: (i: any) => any;
}
declare class RenderingLayoutContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LAYOUT(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    reportDataItemPropertiesList(): any;
    RBRACE(): any;
}
declare class LabelsDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LABELS(): any;
    LBRACE(): any;
    RBRACE(): any;
    labelDefinition: (i: any) => any;
}
declare class LabelDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier: (i: any) => any;
    EQUAL: (i: any) => any;
    STRING_LITERAL(): any;
    SEMICOLON(): any;
    COMMA: (i: any) => any;
    literal: (i: any) => any;
}
declare class ReportDataItemLinkPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATAITEMLINK(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
    tableRelationReference: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class QueryObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    QUERY(): any;
    INTEGER_LITERAL(): any;
    identifier(): any;
    LBRACE(): any;
    RBRACE(): any;
    queryPropertiesList(): any;
    queryElements(): any;
    variablesList: (i: any) => any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class QueryElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ELEMENTS(): any;
    LBRACE(): any;
    RBRACE(): any;
    queryDataItemDefinition: (i: any) => any;
}
declare class QueryDataItemDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATAITEM(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    queryPropertiesList(): any;
    queryDataItemElementsList(): any;
}
declare class QueryDataItemElementsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    queryColumnDefinition: (i: any) => any;
    queryFilterDefinition: (i: any) => any;
    queryDataItemDefinition: (i: any) => any;
}
declare class QueryPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    queryPropertyItem: (i: any) => any;
}
declare class QueryPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    queryProperty(): any;
    SEMICOLON(): any;
}
declare class QueryPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    accessByPermissionProperty(): any;
    accessProperty(): any;
    queryDataItemLinkProperty(): any;
    dataItemTableFilterProp(): any;
    objectPermissionsList(): any;
    orderByProperty(): any;
}
declare class OrderByPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ORDERBY(): any;
    EQUAL(): any;
    IDENTIFIER: (i: any) => any;
    LPAREN: (i: any) => any;
    identifier: (i: any) => any;
    RPAREN: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class QueryColumnDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLUMN(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    SEMICOLON(): any;
    expression(): any;
    queryColumnPropertiesList(): any;
}
declare class QueryColumnPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    queryColumnPropertyItem: (i: any) => any;
}
declare class QueryColumnPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    queryColumnProperty(): any;
    SEMICOLON(): any;
}
declare class QueryColumnPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    columnFilterProp(): any;
    dataItemTableFilterProp(): any;
    DECIMALPLACES(): any;
    EQUAL(): any;
    decimalPlacesPropValue(): any;
}
declare class QueryFilterDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FILTER(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    tableFieldReference(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    queryColumnPropertiesList(): any;
}
declare class QueryDataItemLinkPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATAITEMLINK(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
    tableFieldReference: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class DataItemTableFilterPropContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    DATAITEMTABLEFILTER(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
    tableRelationReference: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class ColumnFilterPropContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    COLUMNFILTER(): any;
    EQUAL: (i: any) => any;
    identifier: (i: any) => any;
    tableRelationReference: (i: any) => any;
    COMMA: (i: any) => any;
}
declare class XmlportObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    XMLPORT(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    xmlPortSchema(): any;
    variablesList: (i: any) => any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class XmlPortPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    xmlPortPropertyItem: (i: any) => any;
}
declare class XmlPortPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    xmlPortProperty(): any;
    SEMICOLON(): any;
}
declare class XmlPortPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
}
declare class XmlPortSchemaContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    SCHEMA(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortTextElement(): any;
    xmlPortTableElement(): any;
}
declare class XmlPortTextElementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TEXTELEMENT(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    xmlPortTableElement: (i: any) => any;
    xmlPortFieldElement: (i: any) => any;
    xmlPortTextElement: (i: any) => any;
    xmlPortTextAttribute: (i: any) => any;
    triggersList(): any;
}
declare class XmlPortFieldElementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDELEMENT(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    expression(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    xmlPortTableElement: (i: any) => any;
    xmlPortFieldElement: (i: any) => any;
    xmlPortFieldAttribute: (i: any) => any;
    xmlPortTextElement: (i: any) => any;
    xmlPortTextAttribute: (i: any) => any;
    triggersList(): any;
}
declare class XmlPortFieldAttributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDATTRIBUTE(): any;
    LPAREN(): any;
    identifier: (i: any) => any;
    SEMICOLON(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    triggersList(): any;
}
declare class XmlPortTextAttributeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TEXTATTRIBUTE(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    triggersList(): any;
}
declare class XmlPortTableElementContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TABLEELEMENT(): any;
    LPAREN(): any;
    identifier: (i: any) => any;
    SEMICOLON(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    xmlPortPropertiesList(): any;
    xmlPortFieldElement: (i: any) => any;
    xmlPortFieldAttribute: (i: any) => any;
    xmlPortTextElement: (i: any) => any;
    triggersList(): any;
}
declare class EnumObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUM(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    RBRACE(): any;
    implementsInterfacesList(): any;
    enumPropertiesList(): any;
    enumValuesList(): any;
}
declare class EnumPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumPropertyItem: (i: any) => any;
}
declare class EnumPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumProperty(): any;
    SEMICOLON(): any;
}
declare class EnumPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    implementationProperty(): any;
}
declare class EnumValuesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumValueDefinition: (i: any) => any;
}
declare class EnumValueDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    VALUE(): any;
    LPAREN(): any;
    INTEGER_LITERAL(): any;
    SEMICOLON(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    enumValuePropertiesList(): any;
}
declare class EnumValuePropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumValuePropertyItem: (i: any) => any;
}
declare class EnumValuePropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enumValueProperty(): any;
    SEMICOLON(): any;
}
declare class EnumValuePropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
    implementationProperty(): any;
}
declare class ImplementationPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    identifier(): any;
    EQUAL: (i: any) => any;
    identifierWithNamespace: (i: any) => any;
}
declare class InterfaceObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    INTERFACE(): any;
    identifier(): any;
    LBRACE(): any;
    RBRACE(): any;
    EXTENDS(): any;
    identifiersList(): any;
    interfacePropertiesList(): any;
    procedureDeclaration: (i: any) => any;
}
declare class InterfacePropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    interfacePropertyItem: (i: any) => any;
}
declare class InterfacePropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    interfaceProperty(): any;
    SEMICOLON(): any;
}
declare class InterfacePropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    accessProperty(): any;
    genericObjectProperty(): any;
}
declare class AccessPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACCESS(): any;
    EQUAL(): any;
    INTERNAL(): any;
    PUBLIC(): any;
}
declare class ProcedureDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PROCEDURE(): any;
    identifier(): any;
    LPAREN(): any;
    RPAREN(): any;
    parameterList(): any;
    procedureReturnType(): any;
    SEMICOLON(): any;
}
declare class ControlAddInObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CONTROLADDIN(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    controlAddInElements(): any;
    RBRACE(): any;
}
declare class ControlAddInElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    controlAddInPropertiesList: (i: any) => any;
    procedureDeclaration: (i: any) => any;
    eventDeclaration: (i: any) => any;
}
declare class ControlAddInPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    controlAddInProperty(): any;
    SEMICOLON(): any;
}
declare class ControlAddInPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    controlAddInPropertyItem: (i: any) => any;
    SEMICOLON: (i: any) => any;
}
declare class ControlAddInPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
}
declare class EventDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    EVENT(): any;
    IDENTIFIER(): any;
    LPAREN(): any;
    RPAREN(): any;
    SEMICOLON(): any;
    parameterList(): any;
}
declare class ProfileObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PROFILE(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    RBRACE(): any;
    profileElements: (i: any) => any;
}
declare class ProfileElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    profileProperty(): any;
}
declare class ProfilePropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    profilePropertyItem(): any;
    SEMICOLON(): any;
}
declare class ProfilePropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    genericObjectProperty(): any;
}
declare class ProfileCustomizationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
}
declare class EntitlementObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENTITLEMENT(): any;
    IDENTIFIER(): any;
    LBRACE(): any;
    entitlementElements(): any;
    RBRACE(): any;
}
declare class EntitlementElementsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    entitlementPropertiesList: (i: any) => any;
}
declare class EntitlementPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    entitlementPropertyItem(): any;
    SEMICOLON(): any;
}
declare class EntitlementPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ID(): any;
    EQUAL(): any;
    STRING_LITERAL(): any;
}
declare class TableExtensionObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    TABLEEXTENSION(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER: (i: any) => any;
    EXTENDS(): any;
    LBRACE(): any;
    RBRACE(): any;
    tableExtPropertiesList(): any;
    tableExtFieldsList(): any;
    tableKeysSection(): any;
    variablesList: (i: any) => any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class TableExtPropertiesListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableExtPropertyItem: (i: any) => any;
}
declare class TableExtPropertyItemContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    tableExtensionProperty(): any;
    SEMICOLON(): any;
}
declare class TableExtensionPropertyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    CAPTIONML(): any;
    EQUAL: (i: any) => any;
    IDENTIFIER: (i: any) => any;
    STRING_LITERAL: (i: any) => any;
    COMMA: (i: any) => any;
    objectPermissionsList(): any;
    genericObjectProperty(): any;
}
declare class TableExtFieldModificationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MODIFY(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    tableFieldPropertiesList(): any;
    triggersList(): any;
}
declare class TableExtFieldsListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    FIELDS(): any;
    LBRACE(): any;
    RBRACE(): any;
    tableFieldDefinition: (i: any) => any;
    tableExtFieldModification: (i: any) => any;
}
declare class PageExtensionObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    PAGEEXTENSION(): any;
    INTEGER_LITERAL(): any;
    identifier(): any;
    EXTENDS(): any;
    identifierWithNamespace(): any;
    LBRACE(): any;
    RBRACE(): any;
    pagePropertiesList(): any;
    pageExtLayoutDefinition(): any;
    pageExtActionsBlock(): any;
    variablesList: (i: any) => any;
    triggersList: (i: any) => any;
    proceduresList: (i: any) => any;
}
declare class PageExtLayoutDefinitionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    LAYOUT(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageExtLayoutModification: (i: any) => any;
    pageExtElementModification: (i: any) => any;
    pageExtElementRelocation: (i: any) => any;
}
declare class PageExtActionsBlockContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ACTIONS(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageExtActionModification: (i: any) => any;
    pageExtActionPropModification: (i: any) => any;
    pageExtElementRelocation: (i: any) => any;
}
declare class PageExtLayoutModificationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageExtLayoutModKeyword(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    layoutElements(): any;
    RBRACE(): any;
}
declare class PageExtActionModificationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageExtLayoutModKeyword(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    actionElements(): any;
    RBRACE(): any;
}
declare class PageExtActionPropModificationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MODIFY(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    actionElements(): any;
    RBRACE(): any;
}
declare class PageExtElementRelocationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    pageExtElementRelocationKeyword(): any;
    LPAREN(): any;
    identifier(): any;
    SEMICOLON(): any;
    identifiersList(): any;
    RPAREN(): any;
}
declare class PageExtLayoutModKeywordContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ADDAFTER(): any;
    ADDBEFORE(): any;
    ADDFIRST(): any;
    ADDLAST(): any;
}
declare class PageExtElementRelocationKeywordContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MOVEAFTER(): any;
    MOVEBEFORE(): any;
    MOVEFIRST(): any;
    MOVELAST(): any;
}
declare class PageExtElementModificationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    MODIFY(): any;
    LPAREN(): any;
    identifier(): any;
    RPAREN(): any;
    LBRACE(): any;
    RBRACE(): any;
    pageFieldPropertiesList: (i: any) => any;
    actionPropertiesList: (i: any) => any;
    triggersList: (i: any) => any;
}
declare class EnumExtensionObjectContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    ENUMEXTENSION(): any;
    INTEGER_LITERAL(): any;
    IDENTIFIER(): any;
    EXTENDS(): any;
    identifierWithNamespace(): any;
    LBRACE(): any;
    RBRACE(): any;
    enumPropertiesList(): any;
    enumValuesList(): any;
}
