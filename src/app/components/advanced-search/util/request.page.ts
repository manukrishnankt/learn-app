export interface RequestPage {
    simpleSearch?: SimpleSearch;
    sort?: Array<Sort>;
    or?: Array<LogicalOR>;
    and?: Array<LogicalAND>;
    fetchActiveRecordOnly?: boolean;
    doUserStorySearch?: boolean;
    doRollupSearch?: boolean;
    page: number;
    size: number;
  }
  
  export interface FieldSet {
    fieldName: string;
    operator: string;
    fieldType: string;
  }
  
  export interface Sort {
    fieldName: string;
    ordering: Direction;
    fieldType?: string;
  }
  
  interface SimpleSearch extends FieldSet {
    fieldValue: string;
  }
  
  export interface LogicalOR extends FieldSet {
    fieldValue: string;
  }
  
  export interface LogicalAND extends FieldSet {
    fieldValue: string | boolean;
    useTermNotMatch?: boolean;
  }
  
  export enum Direction {
    ASC = 'ASC',
    DESC = 'DESC'
  }
  
  export enum FieldType {
    STRING = 'STRING',
    DATE = 'DATE',
    NUMBER = 'NUMBER',
    BOOLEAN = 'BOOLEAN'
  }
  
  export enum Operator {
    EQUALS = 'EQUALS', // EQUALS and NOT_EQUALS doing by default begins with Query
    NOT_EQUALS = 'NOT_EQUALS',
    CONTAINS = 'CONTAINS', /// WildCard Search
    GREATER_THAN = 'GREATER_THAN',
    LESS_THAN = 'LESS_THAN',
    GOOGLE = 'GOOGLE'
  }
  