# nest study

## nodeenv

### install nodeenv for mac

```bash
brew install nodeenv
```

### command

#### create nodeenv

```bash
nodeenv --node=16.16.0 nenv
```

#### setup nodeenv

```bash
. nenv/bin/activate
```

## typeorm-model-generator

### command

```
typeorm-model-generator -h localhost -d study -p 3306 -u root -x 'root' -e mysql -o .
```