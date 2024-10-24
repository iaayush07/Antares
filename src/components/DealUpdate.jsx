import { Flex, Divider, Center, Stack, Box, Title, Badge, Avatar, Group, Text } from "@mantine/core";
const DealUpdate = ({ avatarUrl, badgeText, name, date, title, badgeBgColor, avatarBgColor }) => {
  return (
    <>
    <Flex ml="16px">
              <Group>
                <Stack align="center" gap={0}>
                  <Center
                    style={{ width: 100, height: 100, position: "relative" }}
                  >
                    <Box
                      style={{
                        padding: "2px",
                        border: "2px solid blue",
                        borderRadius: "50%",
                      }}
                    >
                      <Avatar
                        radius="50%"
                        size={75}
                        style={{
                          backgroundColor: avatarBgColor,
                          border: "2px solid white",
                        }}
                      >
                        <img
                          src={avatarUrl}
                          alt="Icon"
                          style={{ width: "50%", height: "50%" }}
                        />
                      </Avatar>
                    </Box>
                    <Badge
                      py="12px"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: -10,
                        backgroundColor: badgeBgColor,
                        fontSize: "12px",
                        border: "1px solid #ffffff"
                      }}
                      radius="lg"
                    >
                      8/10
                    </Badge>
                  </Center>
                  <Title order={6} className="text-secondary">{title}</Title>
                </Stack>
              </Group>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                {/* Upper section with name and date */}
                <Flex spacing={0} direction="column" align="flex-end" ml="xl">
                  <Text weight={500} size="sm" className="text-secondary" fw="500"
                  >
                  {name}
                  </Text>
                  <Text size="sm" className="text-gray">
                  {date}
                  </Text>
                </Flex>
                <Divider
                  style={{
                    marginTop: 8,
                    height: 7,
                    backgroundColor: name?  avatarBgColor : "#939598",
                    borderRadius: "8px",
                    minWidth: "100px"
                  }}
                />
              </Box>
            </Flex>
    </>
  )
}

export default DealUpdate