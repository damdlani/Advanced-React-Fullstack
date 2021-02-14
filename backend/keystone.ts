import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import 'dotenv/config';
import { insertSeedData } from './seed-data';

const databaseURL = 
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, //How long does user stay signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  //if there is no user yet, Keystone will ask to create the first one
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO: Add in iniitial roles here
  }
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        if(process.argv.includes('--seed-data')){
          await insertSeedData(keystone);
        };
        //adding doomy data after command 'npm run seed-data'
      },
    },
    lists: createSchema({
      //Schema items here
      User,
      Product,
      ProductImage,
    }),
    ui: {
      //Show UI only for people who pass test
      isAccessAllowed: ({ session }) => {
        return !!session?.data
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      //GraphQL query
      User: 'id',
    })
  })
);