
    export type RemoteKeys = 'remote/Route';
    type PackageType<T> = T extends 'remote/Route' ? typeof import('remote/Route') :any;