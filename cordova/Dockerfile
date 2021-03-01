FROM openjdk:8-jdk-slim

ENV GRADLE_VERSION="6.7"
ENV GRADLE_URL="https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip"
ENV GRADLE_HOME="/opt/gradle-${GRADLE_VERSION}"
ENV CORDOVA_GRADLE_VERSION="6.5"
ENV CORDOVA_GRADLE_URL="https://services.gradle.org/distributions/gradle-${CORDOVA_GRADLE_VERSION}-all.zip"
ENV ANDROID_SDK_URL="https://dl.google.com/android/repository/commandlinetools-linux-6858069_latest.zip"
ENV ANDROID_HOME="/opt/android"
ENV ANDROID_SDK_ROOT="/opt/android"
ENV BUILD_TOOLS_VERSION="29.0.3"
ENV CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL="file:///opt/cordova-gradle.zip"

ENV PATH $PATH:$ANDROID_HOME/cmdline-tools/latest/bin/:${GRADLE_HOME}/bin:${ANDROID_HOME}/build-tools/${BUILD_TOOLS_VERSION}:${ANDROID_HOME}/platform-tools

WORKDIR /opt

RUN apt-get -qq update && \
    apt-get -qq install -y curl wget zip && \
    # Installs nodejs
    curl -sL https://deb.nodesource.com/setup_15.x | bash - && \
    apt-get -qq install -y nodejs

# Installs Gradle
RUN wget -O gradle.zip ${GRADLE_URL} \
    && unzip gradle.zip -d /opt \
    && rm gradle.zip \
    && wget -O cordova-gradle.zip ${CORDOVA_GRADLE_URL}



# Installs Android SDK
RUN mkdir -p android/latest \
    && cd android \
    && wget -O cmdline-tools.zip ${ANDROID_SDK_URL} \
    && unzip cmdline-tools.zip \
    && mv cmdline-tools/* latest \
    && mv latest cmdline-tools \
    && rm cmdline-tools.zip

RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "platforms;android-30" "build-tools;${BUILD_TOOLS_VERSION}" && \
    npm i -g cordova && \
    cordova telemetry on

# Clean up
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    apt-get autoremove -y && \
    apt-get clean

WORKDIR /root