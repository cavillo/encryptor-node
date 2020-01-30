import { expect } from 'chai';
import 'mocha';

import { Encryptor } from '../dist';

// TODO
describe('Testing Encryptions', async () => {
  it('Encrypting and decrypting a message using same secret key', async () => {
    const secret = 's3cr3t!';
    const obj = {
      message: 'This is an very important message',
    };
    const safe = new Encryptor();

    // Encrypting
    const encrypted = safe.encrypt(secret, obj);

    // Decrypting
    const result = safe.decrypt(secret, encrypted);

    expect(result).to.have.property('message');
    expect(obj.message).to.equal(result.message);
  });

  it('Encrypting and decrypting a message using a different secret key', async () => {
    const secret = 's3cr3t!';
    const secret2 = 'secret!';
    const obj = {
      message: 'This is an very important message',
    };
    const safe = new Encryptor();

    // Encrypting
    const encrypted = safe.encrypt(secret, obj);

    // Decrypting
    expect(() => {
      safe.decrypt(secret2, encrypted);
    }).to.throw();
  });

  it('Encrypting same message twice with same secret different encryptions', async () => {
    const secret = 's3cr3t!';
    const obj = {
      message: 'This is an very important message',
    };
    const safe = new Encryptor();

    // Encrypting
    const encrypted = safe.encrypt(secret, obj);

    // Encrypting
    const encrypted2 = safe.encrypt(secret, obj);

    expect(encrypted).to.not.equal(encrypted2);
  });
});
