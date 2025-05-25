import cassandra from "cassandra-driver"

export class DBConnection {
    static connect() {

    }
}

export const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'musicfy'
});